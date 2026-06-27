"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ── Plain-text renderer for user messages ────────────────────────────────────
// Detects bare URLs and email addresses and makes them clickable.
const SPLIT_RE = /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const IS_URL   = /^https?:\/\//;
const IS_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function UserText({ text }: { text: string }) {
  const parts = text.split(SPLIT_RE).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (IS_URL.test(part)) {
          return (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer"
               style={{ color: "#ffffff", textDecoration: "underline" }}>
              {part}
            </a>
          );
        }
        if (IS_EMAIL.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`}
               style={{ color: "#ffffff", textDecoration: "underline" }}>
              {part}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

// ── Markdown renderer for assistant messages ─────────────────────────────────
function AssistantMessage({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p({ children }) {
          return (
            <p className="mb-1.5 last:mb-0 leading-relaxed">{children}</p>
          );
        },
        strong({ children }) {
          return <strong className="font-semibold text-foreground">{children}</strong>;
        },
        em({ children }) {
          return <em className="italic">{children}</em>;
        },
        ul({ children }) {
          return (
            <ul className="my-1 ml-3 list-disc list-outside space-y-0.5">{children}</ul>
          );
        },
        ol({ children }) {
          return (
            <ol className="my-1 ml-3 list-decimal list-outside space-y-0.5">{children}</ol>
          );
        },
        li({ children }) {
          return <li className="leading-relaxed">{children}</li>;
        },
        a({ href, children }) {
          const isEmail = (href ?? "").startsWith("mailto:");
          return (
            <a
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              style={{ color: "#0070BA", textDecoration: "underline", fontWeight: 500 }}
            >
              {children}
            </a>
          );
        },
        code({ children }) {
          return (
            <code
              className="rounded bg-gray-100 px-1 font-mono text-foreground"
              style={{ fontSize: "0.65rem" }}
            >
              {children}
            </code>
          );
        },
        h1({ children }) {
          return (
            <h1 className="mb-1 mt-2 font-semibold first:mt-0" style={{ fontSize: "0.8rem" }}>
              {children}
            </h1>
          );
        },
        h2({ children }) {
          return (
            <h2 className="mb-1 mt-1.5 font-semibold first:mt-0" style={{ fontSize: "0.75rem" }}>
              {children}
            </h2>
          );
        },
        h3({ children }) {
          return (
            <h3 className="mb-0.5 mt-1 font-semibold first:mt-0" style={{ fontSize: "0.7rem" }}>
              {children}
            </h3>
          );
        },
        hr() {
          return <hr className="my-1.5 border-border" />;
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

// ── Chat bubble component ────────────────────────────────────────────────────
export function ChatBubble() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input,    setInput]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res  = await fetch("/api/chat", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.response }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role:    "assistant",
          content: "Sorry, something went wrong. Please use the contact form or email [teclawsgroup@gmail.com](mailto:teclawsgroup@gmail.com).",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="w-80 overflow-hidden rounded-xl border border-border bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-secondary px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">Ask Teclaws</p>
              <p className="mt-0.5 text-xs text-white/70">Technology consultant, always on</p>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto bg-background p-4">
              {messages.length === 0 && (
                <div className="flex h-full items-center justify-center">
                  <p className="max-w-[200px] text-center text-xs leading-relaxed text-muted">
                    Hi! Ask me anything about our cloud, security, DevOps, or software services.
                  </p>
                </div>
              )}
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[87%] min-w-0 rounded-lg px-3 py-2 text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-secondary text-white"
                          : "border border-border bg-white text-foreground shadow-sm"
                      }`}
                      style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
                    >
                      {msg.role === "user" ? (
                        <UserText text={msg.content} />
                      ) : (
                        <AssistantMessage text={msg.content} />
                      )}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-lg border border-border bg-white px-3 py-2 text-xs shadow-sm">
                      <span className="inline-flex gap-1 text-muted">
                        <span className="animate-bounce" style={{ animationDelay: "0ms" }}>·</span>
                        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>·</span>
                        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>·</span>
                      </span>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            </div>

            {/* Input */}
            <div className="flex gap-2 border-t border-border bg-white p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask a question..."
                className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/20"
              />
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                type="button"
                onClick={send}
                disabled={loading || !input.trim()}
                className="rounded-md bg-secondary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-50"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-secondary-dark"
      >
        <svg
          width="15" height="15" viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {open ? "Close" : "Ask us"}
      </motion.button>
    </div>
  );
}

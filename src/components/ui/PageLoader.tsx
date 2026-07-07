"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let pageLoaded = false;
    let minTimePassed = false;

    function tryHide() {
      if (pageLoaded && minTimePassed) setVisible(false);
    }

    const minTimer = setTimeout(() => {
      minTimePassed = true;
      tryHide();
    }, 900);

    const maxTimer = setTimeout(() => setVisible(false), 4500);

    function onLoad() {
      pageLoaded = true;
      tryHide();
    }

    if (document.readyState === "complete") {
      pageLoaded = true;
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0070BA" }}
          aria-hidden="true"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-4"
          >
            <Image
              src="/the-teclaw-logo.png"
              alt="Teclaws"
              width={64}
              height={64}
              priority
            />
            <p className="font-display text-xl font-bold tracking-tight text-white">
              Teclaws
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

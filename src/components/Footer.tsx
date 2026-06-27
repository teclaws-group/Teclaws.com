import Link from "next/link";
import { Logo } from "./ui/Logo";
import { NAV_LINKS, CONTACT } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Logo dark />
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Enterprise technology solutions for businesses worldwide.
            </p>
          </div>
          <nav
            className="flex flex-col gap-8 sm:flex-row sm:gap-12"
            aria-label="Footer navigation"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                Company
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-10 border-t border-white/15 pt-8">
          <p className="text-xs text-white/45">
            &copy; {year} Teclaws Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

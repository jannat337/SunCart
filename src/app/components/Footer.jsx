import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/profile", label: "My Profile" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    name: "X",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-neutral text-neutral-content">
      {/* Wave top */}
      <svg
        className="absolute -top-px left-0 w-full -translate-y-full text-neutral"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,64 480,0 720,28 C960,56 1200,60 1440,20 L1440,60 L0,60 Z"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + newsletter */}
        <div>
          <Link href="/" className="text-3xl font-extrabold">
            ☀️ Sun<span className="text-primary">Cart</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed opacity-75">
            Your one-stop store for summer essentials. Stay cool, stay
            protected, stay stylish all season long.
          </p>
          <div className="join mt-5 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="input join-item w-full bg-white/10 text-sm text-white placeholder:text-white/50"
            />
            <button className="btn btn-primary join-item">Join</button>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-lg font-bold">
            Quick <span className="text-primary">Links</span>
          </h4>
          <ul className="space-y-2 text-sm opacity-80">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition hover:translate-x-1 hover:text-primary"
                >
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-bold">
            Contact <span className="text-primary">Us</span>
          </h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                📍
              </span>
              <span>House 12, Road 5, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                📞
              </span>
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                ✉️
              </span>
              <span>support@suncart.com</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 text-lg font-bold">
            Follow <span className="text-primary">Us</span>
          </h4>
          <p className="mb-4 text-sm opacity-75">
            Get summer deals and style tips on our social pages.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-primary hover:text-primary-content"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs opacity-75 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SunCart. Made with ☀️ for a cool
            summer. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span className="rounded bg-white/10 px-2 py-1">VISA</span>
            <span className="rounded bg-white/10 px-2 py-1">bKash</span>
            <span className="rounded bg-white/10 px-2 py-1">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
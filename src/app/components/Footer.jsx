import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-2xl font-extrabold">
            ☀️ Sun<span className="text-primary">Cart</span>
          </h3>
          <p className="mt-2 text-sm opacity-80">
            Your one-stop store for summer essentials — stay cool, stay
            protected, stay stylish.
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Contact</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1234 567890</li>
            <li>✉️ support@suncart.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Follow Us</h4>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="link link-hover">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="link link-hover">
              Instagram
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="link link-hover">
              X (Twitter)
            </a>
          </div>
          <Link href="/privacy" className="link link-hover mt-4 inline-block text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
}
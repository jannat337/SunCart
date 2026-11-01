"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import UserAvatar from "./UserAvatar";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/profile", label: "My Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/");
  };

  const navLinks = links.map((l) => (
    <li key={l.href}>
      <Link
        href={l.href}
        className={isActive(l.href) ? "text-primary font-semibold" : ""}
      >
        {l.label}
      </Link>
    </li>
  ));

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 px-4 shadow-sm backdrop-blur lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-extrabold">
          ☀️ Sun<span className="text-primary">Cart</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : user ? (
          <>
            <Link href="/profile" title={user.name}>
              <UserAvatar user={user} />
            </Link>
            <button onClick={handleLogout} className="btn btn-primary btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-primary btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("photo");
    const password = form.get("password");

    if (password.length < 8) {
      const msg = "Password must be at least 8 characters";
      setError(msg);
      toast.error(msg);
      return;
    }

    setLoading(true);
    setError("");
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    setLoading(false);

    if (error) {
      const msg = error.message || "Registration failed";
      setError(msg);
      toast.error(msg);
      return;
    }
    toast.success("Registration successful! Please login.");
    router.push("/login");
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-center text-3xl font-bold">
            Create <span className="text-primary">Account</span>
          </h1>

          {error && <div className="alert alert-error text-sm">{error}</div>}

          <label className="label">Name</label>
          <input name="name" type="text" required placeholder="Your name" className="input w-full" />

          <label className="label">Email</label>
          <input name="email" type="email" required placeholder="you@example.com" className="input w-full" />

          <label className="label">Photo URL</label>
          <input name="photo" type="url" required placeholder="https://..." className="input w-full" />

          <label className="label">Password</label>
          <input name="password" type="password" required placeholder="At least 8 characters" className="input w-full" />

          <button disabled={loading} className="btn btn-primary mt-4">
            {loading ? <span className="loading loading-spinner"></span> : "Register"}
          </button>

          <div className="divider">OR</div>

          <button type="button" onClick={handleGoogle} className="btn btn-outline">
            <span className="text-lg font-bold">G</span> Continue with Google
          </button>

          <p className="mt-2 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
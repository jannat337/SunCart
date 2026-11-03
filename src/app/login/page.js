"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const raw = params.get("redirect") || "/";
  const redirect = raw.startsWith("/") && !raw.startsWith("//") ? raw : "/";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setLoading(true);
    setError("");
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      const msg = error.message || "Invalid email or password";
      setError(msg);
      toast.error(msg);
      return;
    }
    toast.success("Login successful!");
    router.push(redirect);
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: redirect });
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-center text-3xl font-bold">
            Welcome <span className="text-primary">Back</span>
          </h1>

          {error && <div className="alert alert-error text-sm">{error}</div>}

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="input w-full"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="Your password"
            className="input w-full"
          />

          <button disabled={loading} className="btn btn-primary mt-4">
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>

          <div className="divider">OR</div>

          <button type="button" onClick={handleGoogle} className="btn btn-outline">
            <span className="text-lg font-bold">G</span> Continue with Google
          </button>

          <p className="mt-2 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
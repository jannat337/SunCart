"use client";

import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import UserAvatar from "../components/UserAvatar";

export default function ProfilePage() {
  const { session, isPending } = useRequireAuth();

  if (isPending || !session) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-base-200 px-4 py-10">
      <div className="card animate__animated animate__fadeInUp w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <UserAvatar user={user} size="w-28" />
          <h1 className="mt-2 text-2xl font-bold">{user.name}</h1>
          <p className="opacity-70">{user.email}</p>
          <Link href="/profile/update" className="btn btn-primary mt-4">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
}
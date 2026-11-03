"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRequireAuth } from "@/lib/useRequireAuth";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { session, isPending } = useRequireAuth();
  const [loading, setLoading] = useState(false);

  if (isPending || !session) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const user = session.user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");

    setLoading(true);
    const { error } = await authClient.updateUser({ name, image });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }
    toast.success("Profile updated successfully!");
    router.push("/profile");
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-center text-2xl font-bold">
            Update <span className="text-primary">Information</span>
          </h1>

          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            required
            defaultValue={user.name}
            className="input w-full"
          />

          <label className="label">Image URL</label>
          <input
            name="image"
            type="url"
            required
            defaultValue={user.image || ""}
            className="input w-full"
          />

          <button disabled={loading} className="btn btn-primary mt-4">
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Update Information"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
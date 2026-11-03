"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import products from "@/app/data/products.json";
import { useRequireAuth } from "@/lib/useRequireAuth";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { session, isPending } = useRequireAuth();

  if (isPending || !session) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Product not found 😕</h1>
        <Link href="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/products" className="link link-hover text-sm">
        ← Back to Products
      </Link>
      <div className="animate__animated animate__fadeInUp mt-4 grid gap-8 rounded-box bg-base-100 p-4 shadow-lg md:grid-cols-2 md:p-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full rounded-box object-cover md:h-full"
        />
        <div className="flex flex-col gap-3">
          <span className="badge badge-secondary">{product.category}</span>
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <p className="opacity-70">
            by <span className="font-semibold">{product.brand}</span>
          </p>
          <p className="font-medium">⭐ {product.rating} / 5</p>
          <p className="text-4xl font-extrabold text-primary">
            ${product.price}
          </p>
          <p>{product.description}</p>
          <div>
            {product.stock > 0 ? (
              <span className="badge badge-success">
                In Stock ({product.stock} left)
              </span>
            ) : (
              <span className="badge badge-error">Out of Stock</span>
            )}
          </div>
          <button
            disabled={product.stock === 0}
            onClick={() => toast.success("Order placed successfully! 🎉")}
            className="btn btn-primary mt-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
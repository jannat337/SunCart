"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "☀️ Summer Sale",
    title: "Summer Sale",
    highlight: "50% OFF",
    subtitle: "Sunglasses, hats and beach gear at unbeatable prices. Limited time only!",
    badge: "-50%",
    chip: "🕶️ UV400 Protection",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700",
    bg: "from-orange-500 via-amber-400 to-yellow-300",
    text: "text-neutral",
  },
  {
    tag: "🔥 Trending Now",
    title: "Hot Deals",
    highlight: "Cool Outfits",
    subtitle: "Grab breezy summer outfits before they are gone. New arrivals every week.",
    badge: "HOT",
    chip: "👗 New Collection",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700",
    bg: "from-rose-600 via-orange-500 to-amber-400",
    text: "text-white",
  },
  {
    tag: "🌿 Skin Care",
    title: "Glow Through",
    highlight: "The Heat",
    subtitle: "Sunscreen and cooling skincare for happy, healthy summer skin.",
    badge: "SPF 50",
    chip: "🧴 Dermatologist Tested",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700",
    bg: "from-sky-500 via-cyan-400 to-teal-300",
    text: "text-neutral",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [paused]);

  const s = slides[index];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`relative overflow-hidden bg-linear-to-br ${s.bg} ${s.text} transition-all duration-700`}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-spin rounded-full border-4 border-dashed border-white/40"
        style={{ animationDuration: "40s" }}
      />
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 animate-spin rounded-full border-2 border-white/40"
        style={{ animationDuration: "25s", animationDirection: "reverse" }}
      />

      <div
        key={index}
        className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-28 pt-12 md:grid-cols-2 md:pb-32 md:pt-16"
      >
        {/* Text side */}
        <div className="animate__animated animate__fadeInLeft text-center md:text-left">
          <span className="inline-block rounded-full bg-white/30 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            {s.tag}
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {s.title}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 rounded-xl bg-white px-3 text-primary shadow-lg">
                {s.highlight}
              </span>
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base opacity-90 md:mx-0 md:text-lg">
            {s.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link href="/products" className="btn btn-neutral btn-lg rounded-full">
              Shop Now →
            </Link>
            <Link
              href="/products"
              className="btn btn-lg rounded-full border-white/60 bg-white/20 backdrop-blur hover:bg-white/40"
            >
              View Deals
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium md:justify-start">
            <span className="rounded-full bg-white/25 px-3 py-1 backdrop-blur">
              🚚 Free Delivery
            </span>
            <span className="rounded-full bg-white/25 px-3 py-1 backdrop-blur">
              🔒 Secure Checkout
            </span>
            <span className="rounded-full bg-white/25 px-3 py-1 backdrop-blur">
              ↩️ Easy Returns
            </span>
          </div>
        </div>

        {/* Image side */}
        <div className="animate__animated animate__zoomIn relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96">
          <div className="absolute inset-0 rounded-full border-8 border-white/40" />
          <div className="absolute inset-4 rounded-full bg-white/30 backdrop-blur" />
          <img
            src={s.image}
            alt={s.title}
            className="relative h-[85%] w-[85%] rounded-full border-4 border-white object-cover shadow-2xl"
          />

          {/* Floating discount badge */}
          <div className="animate__animated animate__pulse animate__infinite absolute -right-2 top-2 flex h-20 w-20 items-center justify-center rounded-full bg-neutral text-xl font-black text-white shadow-xl md:h-24 md:w-24 md:text-2xl">
            {s.badge}
          </div>

          {/* Floating chip */}
          <div className="animate__animated animate__fadeInUp absolute -left-2 bottom-6 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-neutral shadow-xl">
            {s.chip}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-10 bg-neutral" : "w-2.5 bg-neutral/40"
            }`}
          />
        ))}
      </div>

      {/* Wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full text-base-100"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,48 C240,96 480,0 720,32 C960,64 1200,96 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
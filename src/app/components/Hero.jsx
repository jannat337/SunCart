"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Summer Sale 50% OFF",
    subtitle: "Sunglasses, hats and beach gear at unbeatable prices.",
    emoji: "🕶️",
    bg: "bg-linear-to-br from-orange-400 via-amber-400 to-yellow-300",
  },
  {
    title: "Hot Deals 🔥",
    subtitle: "Grab trending summer outfits before they are gone.",
    emoji: "👗",
    bg: "bg-linear-to-br from-rose-500 via-orange-500 to-amber-400",
  },
  {
    title: "Glow Through the Heat",
    subtitle: "Sunscreen and cooling skincare for happy, healthy skin.",
    emoji: "🧴",
    bg: "bg-linear-to-br from-sky-400 via-cyan-400 to-teal-300",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4500
    );
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className={`${slide.bg} transition-all duration-700`}>
      <div
        key={index}
        className="animate__animated animate__fadeIn mx-auto flex max-w-7xl flex-col-reverse items-center gap-6 px-4 py-16 text-neutral md:flex-row md:py-24"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold md:text-6xl">{slide.title}</h1>
          <p className="mt-4 text-lg md:text-xl">{slide.subtitle}</p>
          <Link href="/products" className="btn btn-neutral mt-6">
            Shop Now
          </Link>
        </div>
        <div className="animate__animated animate__bounceIn text-8xl md:text-[10rem]">
          {slide.emoji}
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-neutral" : "w-2.5 bg-neutral/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
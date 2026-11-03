import Link from "next/link";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import products from "./data/products.json";

const popular = [...products].sort((a, b) => b.rating - a.rating).slice(0, 6);

const tips = [
  { icon: "🧴", title: "Apply Sunscreen", text: "Use SPF 30+ every 2 hours when outdoors." },
  { icon: "💧", title: "Stay Hydrated", text: "Drink at least 8 glasses of water a day." },
  { icon: "🧢", title: "Cover Up", text: "Wear hats and light cotton clothes in peak sun." },
  { icon: "🌿", title: "Soothe Your Skin", text: "Aloe vera gel calms sunburn and cools skin." },
];

const brands = [
  { name: "SunShade", tagline: "Eyewear that protects" },
  { name: "CoolWear", tagline: "Breezy summer fashion" },
  { name: "SunGuard", tagline: "Trusted sun protection" },
  { name: "PureGlow", tagline: "Natural skincare" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-center text-3xl font-bold">
          Popular <span className="text-primary">Products</span>
        </h2>
        <p className="mt-2 text-center opacity-70">Our top rated summer picks</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/products" className="btn btn-outline btn-primary">
            See All Products
          </Link>
        </div>
      </section>

      <section className="bg-base-200 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold">
            Summer Care <span className="text-primary">Tips</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((t) => (
              <div key={t.title} className="card bg-base-100 shadow">
                <div className="card-body items-center text-center">
                  <div className="text-5xl">{t.icon}</div>
                  <h3 className="card-title">{t.title}</h3>
                  <p className="text-sm opacity-80">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-center text-3xl font-bold">
          Top <span className="text-primary">Brands</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="card border border-primary/30 bg-base-100 transition hover:border-primary hover:shadow-lg"
            >
              <div className="card-body items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-primary-content">
                  {b.name[0]}
                </div>
                <h3 className="card-title">{b.name}</h3>
                <p className="text-sm opacity-70">{b.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
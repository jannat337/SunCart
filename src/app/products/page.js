import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

export const metadata = { title: "Products | SunCart" };

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-center text-3xl font-bold">
        All <span className="text-primary">Products</span>
      </h1>
      <p className="mt-2 text-center opacity-70">
        Everything you need for a perfect summer
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-secondary badge-outline">
          {product.category}
        </span>
        <h3 className="card-title">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-medium">⭐ {product.rating}</span>
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>
        </div>
        <div className="card-actions mt-2">
          <Link href={`/products/${product.id}`} className="btn btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
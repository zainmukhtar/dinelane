import { ProductGrid } from "@/components/products/ProductGrid";
import HeroBanner from "./HeroBanner";
import { getProducts } from "@repo/api-client";

export default async function HomePage() {
  const products = await getProducts(
    process.env.NEXT_PUBLIC_API_URL!,
    process.env.NEXT_PUBLIC_PUBLISHABLE_API_KEY!,
  );
  return (
    <div>
      <HeroBanner />
      <ProductGrid products={products} />
    </div>
  );
}

import type { Product } from "@repo/types";

interface ProductListResponse {
  products: Product[];
  count: number;
}

export async function getProducts(
  baseUrl: string,
  publishableApiKey: string,
): Promise<Product[]> {
  console.log("Fetching products from", baseUrl, publishableApiKey);

  const res = await fetch(`${baseUrl}/store/products`, {
    headers: {
      "x-publishable-api-key": publishableApiKey,
    },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`,
    );
  }

  const data: ProductListResponse = await res.json();
  return data.products;
}

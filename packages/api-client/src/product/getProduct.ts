import { Product } from "@repo/types";
import { apiFetch } from "../client.js";

interface ProductResponse {
  product: Product;
}

export async function getProduct(
  baseUrl: string,
  publishableApiKey: string,
  id: string,
): Promise<Product> {
  const data = await apiFetch<ProductResponse>(`/store/products/${id}`, {
    baseUrl,
    publishableApiKey,
  });
  return data.product;
}

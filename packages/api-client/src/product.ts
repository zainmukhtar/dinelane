import type { Product } from "@repo/types";
import { apiFetch } from "./client.js";
import { getRegionId } from "./regions.js";

interface ProductListResponse {
  products: Product[];
  count: number;
}

export async function getProducts(
  baseUrl: string,
  publishableApiKey: string,
): Promise<Product[]> {
  const regionId = await getRegionId(baseUrl, publishableApiKey);

  const data = await apiFetch<ProductListResponse>(
    `/store/products?fields=*variants.calculated_price&region_id=${regionId}`,
    {
      baseUrl,
      publishableApiKey,
    },
  );

  return data.products;
}

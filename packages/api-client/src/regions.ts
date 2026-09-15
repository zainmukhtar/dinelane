import { apiFetch } from "./client.js";

interface Region {
  id: string;
}

interface RegionListResponse {
  regions: Region[];
}

export async function getRegionId(
  baseUrl: string,
  publishableApiKey: string,
): Promise<string> {
  const data = await apiFetch<RegionListResponse>("/store/regions", {
    baseUrl,
    publishableApiKey,
    next: { revalidate: 3600 },
  });

  const region = data.regions[0];

  if (!region) {
    throw new Error("No regions configured on the backend.");
  }

  return region.id;
}

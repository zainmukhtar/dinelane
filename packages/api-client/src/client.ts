interface NextFetchOptions {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

interface ApiFetchOptions extends RequestInit, NextFetchOptions {
  baseUrl: string;
  publishableApiKey: string;
}

export async function apiFetch<T>(
  path: string,
  { baseUrl, publishableApiKey, ...init }: ApiFetchOptions,
): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "x-publishable-api-key": publishableApiKey,
      ...init.headers,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    console.error(`API error [${path}]:`, errorBody);
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

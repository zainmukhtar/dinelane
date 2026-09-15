import type { ImageLoaderProps } from "next/image";

export default function defaultLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const url = new URL(`${src}`);
  url.searchParams.set("format", "auto");
  url.searchParams.set("width", width.toString());
  url.searchParams.set("quality", (quality ?? 75).toString());
  return url.href;
}

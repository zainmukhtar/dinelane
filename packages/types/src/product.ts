export interface Product {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  variants: ProuductVariant[];
}

export interface ProuductVariant {
  id: string;
  sku: string;
  title: string;
}

export interface ProductOptions {
  id: string;
  title: string;
  values: ProductOptionValues[];
}

export interface ProductOptionValues {
  id: string;
  value: string;
}

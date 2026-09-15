export interface Product {
  id: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  variants: ProuductVariant[];
}

export interface ProuductVariant {
  id: string;
  sku: string;
  title: string;
  calculated_price: CalculatedPrice;
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

export interface CalculatedPrice {
  id: string;
  calculated_amount: number | null;
  currency_code: string | null;
}

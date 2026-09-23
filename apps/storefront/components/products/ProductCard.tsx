"use client";

import Image from "next/image";
import type { Product } from "@repo/types";
import { getProduct } from "@repo/api-client";
import { ProductDetailPopup } from "./ProductDetailPopup";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  console.log("Product: ", product);
  // const price = product.variants?.[0]?.calculated_price;

  console.log(
    JSON.stringify(
      product.variants.map((v) => ({
        title: v.title,
        price: v.calculated_price?.calculated_amount,
      })),
    ),
  );

  async function handleProductClick() {
    try {
      const fullProduct = await getProduct(
        process.env.NEXT_PUBLIC_API_URL!,
        process.env.NEXT_PUBLIC_PUBLISHABLE_API_KEY!,
        product.id,
      );

      setOpen(true);

      console.log("Full Product: ", fullProduct);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  }

  return (
    <div className="flex flex-col gap-2" onClick={handleProductClick}>
      <div className="relative aspect-square w-full bg-zinc-100">
        {product.thumbnail && (
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <p className="text-sm font-medium">{product.title}</p>
      <p className="text-xs">{product.description}</p>
      {product.variants && product.variants.length > 0 && (
        <div key={"product"} className="">
          {product.variants.map((variant) => (
            <div key={variant.id}>
              <span>{variant.title}</span>
              {variant.calculated_price.calculated_amount && (
                <span>
                  {variant.calculated_price.currency_code +
                    " " +
                    variant.calculated_price.calculated_amount}
                </span>
                // <span>
                //   {new Intl.NumberFormat("en-US", {
                //     style: "currency",
                //     currency: variant.price.currency_code,
                //   }).format(variant.price.calculated_price)}
                // </span>
              )}
            </div>
          ))}
        </div>
      )}
      <ProductDetailPopup
        open={open}
        onOpenChange={setOpen}
        product={product}
      />
    </div>
  );
}

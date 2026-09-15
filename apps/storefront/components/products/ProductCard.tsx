import Image from "next/image";
import type { Product } from "@repo/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
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

  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
}

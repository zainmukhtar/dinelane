import type { Product } from "@repo/types";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@repo/ui";

interface ProductDetailPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}

export function ProductDetailPopup({
  open,
  onOpenChange,
  product,
}: ProductDetailPopupProps) {
  // For now, just use the first variant’s price
  const firstVariant = product.variants?.[0];
  const price = firstVariant?.calculated_price;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4">
          {/* Image */}
          {product.thumbnail && (
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-zinc-100">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Description */}
          {product.description && (
            <p className="text-sm text-zinc-600">{product.description}</p>
          )}

          {/* Price */}
          {price?.calculated_amount != null && (
            <div className="text-base font-medium">
              {price.currency_code?.toUpperCase()}{" "}
              {price.calculated_amount.toFixed(2)}
            </div>
          )}
        </div>

        {/* Footer: quantity + add to cart (stub for now) */}
        <DialogFooter className="mt-4 flex items-center justify-between">
          <div className="text-sm text-zinc-500">Quantity: 1 (stub)</div>
          <button
            type="button"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add to cart clicked for product:", product.id);
              onOpenChange(false);
            }}
          >
            Add to cart
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

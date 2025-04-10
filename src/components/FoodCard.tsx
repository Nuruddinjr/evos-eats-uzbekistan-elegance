
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ButtonCustom } from "@/components/ui/button-custom";
import type { Product } from "@/data/mockData";

interface FoodCardProps {
  product: Product;
  className?: string;
}

export function FoodCard({ product, className }: FoodCardProps) {
  const { name, description, price, discountPercentage, image } = product;

  // Calculate the discounted price if there is a discount
  const discountedPrice = discountPercentage 
    ? Math.round(price - (price * (discountPercentage / 100))) 
    : null;

  // Format prices with Uzbek formatting
  const formattedOriginalPrice = new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);

  const formattedDiscountedPrice = discountedPrice ? new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(discountedPrice) : null;

  const handleAddToCart = () => {
    toast.success(`${name} savatga qo'shildi`);
  };

  return (
    <div className={cn(
      "relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      {discountPercentage && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-bl-lg z-10">
          -{discountPercentage}%
        </div>
      )}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 flex-1">{description}</p>
        
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <span className="font-bold text-gray-900">{formattedDiscountedPrice} so'm</span>
                <span className="text-gray-500 text-sm line-through">{formattedOriginalPrice} so'm</span>
              </>
            ) : (
              <span className="font-bold text-gray-900">{formattedOriginalPrice} so'm</span>
            )}
          </div>
          <ButtonCustom 
            size="sm" 
            className="w-full bg-evos hover:bg-evos-dark text-sm py-1"
            onClick={handleAddToCart}
          >
            Savatga
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}


import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ButtonCustom } from "@/components/ui/button-custom";
import type { Product } from "@/data/mockData";

interface FoodCardProps {
  product: Product;
  className?: string;
}

export function FoodCard({ product, className }: FoodCardProps) {
  const { name, description, price, image } = product;

  const formattedPrice = new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);

  const handleAddToCart = () => {
    toast.success(`${name} добавлен в корзину`);
  };

  return (
    <div className={cn(
      "relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
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
          <span className="font-bold text-gray-900">{formattedPrice} сум</span>
          <ButtonCustom 
            size="sm" 
            className="w-full bg-evos hover:bg-evos-dark text-sm py-1"
            onClick={handleAddToCart}
          >
            В корзину
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}

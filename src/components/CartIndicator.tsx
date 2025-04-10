
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/mockData";

interface CartIndicatorProps {
  items: Product[];
}

export function CartIndicator({ items }: CartIndicatorProps) {
  const totalItems = items.length;
  
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  
  const formattedPrice = new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(totalPrice);

  return (
    <button 
      className={cn(
        "relative flex items-center gap-2 py-1.5 px-3 rounded-full transition-all",
        totalItems > 0 
          ? "bg-evos text-white" 
          : "bg-gray-100 text-gray-500"
      )}
    >
      <ShoppingBag size={18} />
      {totalItems > 0 && (
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium leading-none">{totalItems} dona</span>
          <span className="text-xs font-bold leading-none">{formattedPrice} so'm</span>
        </div>
      )}
    </button>
  );
}

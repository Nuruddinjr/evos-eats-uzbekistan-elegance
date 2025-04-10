
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { FoodCard } from "@/components/FoodCard";
import { products } from "@/data/mockData";

export function FeaturedItems() {
  const featuredProducts = products.filter(product => product.isFeatured);
  
  return (
    <section className="py-4">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl text-gray-900">Популярное</h2>
          <button className="flex items-center gap-1 text-evos text-sm font-medium">
            Показать все
            <ArrowRight size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featuredProducts.map(product => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

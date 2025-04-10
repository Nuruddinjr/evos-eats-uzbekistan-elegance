
import { useRef } from "react";
import { ArrowRight, Percent } from "lucide-react";
import { FoodCard } from "@/components/FoodCard";
import { products } from "@/data/mockData";

export function FeaturedItems() {
  const featuredProducts = products.filter(product => product.isFeatured);
  const discountedProducts = featuredProducts.filter(product => product.discountPercentage);
  const hasDiscounts = discountedProducts.length > 0;
  
  return (
    <section className="py-4">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl text-gray-900">Mashhur</h2>
            {hasDiscounts && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Percent size={12} />
                Aksiyalar
              </span>
            )}
          </div>
          <button className="flex items-center gap-1 text-evos text-sm font-medium">
            Barchasini ko'rsatish
            <ArrowRight size={14} />
          </button>
        </div>
        
        {hasDiscounts && (
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-xl mb-4 border border-red-200">
            <p className="text-sm text-red-700 font-medium flex items-center gap-1">
              <Percent size={16} className="text-red-500" />
              {Math.max(...discountedProducts.map(p => p.discountPercentage || 0))}% gacha maxsus takliflar
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featuredProducts.map(product => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

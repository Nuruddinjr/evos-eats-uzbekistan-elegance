
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockData";

export function CategoryScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollerRef.current) return;
    
    const scrollAmount = 200;
    const currentScroll = scrollerRef.current.scrollLeft;
    
    scrollerRef.current.scrollTo({
      left: direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative py-4">
      <div
        ref={scrollerRef}
        className="flex gap-3 overflow-x-auto scrollbar-none scroll-smooth px-4"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex flex-col items-center justify-center min-w-[72px] p-2 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-evos/20 transition-colors"
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-xs font-medium text-gray-700">{category.name}</span>
          </button>
        ))}
      </div>
      
      <Button 
        size="icon" 
        variant="outline" 
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full h-8 w-8 border shadow-md hover:bg-white hidden md:flex"
        onClick={() => scroll('left')}
      >
        <ChevronLeft size={16} />
      </Button>
      
      <Button 
        size="icon" 
        variant="outline" 
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full h-8 w-8 border shadow-md hover:bg-white hidden md:flex"
        onClick={() => scroll('right')}
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}


import { useState } from "react";
import { Menu, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartIndicator } from "@/components/CartIndicator";
import { cartItems } from "@/data/mockData";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-lg border-b border-gray-100">
      <div className="container px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu size={20} className="text-gray-700" />
          </Button>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl text-evos">EVOS</h1>
            <p className="text-xs text-gray-500">Ташкент, Узбекистан</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search size={20} className="text-gray-700" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User size={20} className="text-gray-700" />
          </Button>
          <CartIndicator items={cartItems} />
        </div>
      </div>
      
      {isSearchOpen && (
        <div className="container px-4 pb-3 animate-fade-in">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-evos/50"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
              onClick={() => setIsSearchOpen(false)}
            >
              <Search size={18} className="text-gray-700" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}


import { MainLayout } from "@/layouts/MainLayout";
import { CategoryScroller } from "@/components/CategoryScroller";
import { FeaturedItems } from "@/components/FeaturedItems";
import { FoodCard } from "@/components/FoodCard";
import { products } from "@/data/mockData";

const Index = () => {
  const burgers = products.filter(product => product.category === "Бургеры");
  const pizzas = products.filter(product => product.category === "Пицца");

  return (
    <MainLayout>
      <div className="pb-16">
        {/* Hero Banner */}
        <div className="relative h-40 bg-gradient-to-r from-evos to-evos-light overflow-hidden flex items-center">
          <div className="container px-4">
            <h2 className="text-white text-2xl font-bold max-w-[70%]">Вкусная еда с быстрой доставкой</h2>
            <p className="text-white/90 mt-2 text-sm max-w-[70%]">Закажите прямо сейчас и получите скидку 20%!</p>
          </div>
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -mr-16"></div>
          <div className="absolute right-12 bottom-0 w-16 h-16 bg-white/10 rounded-full -mb-8"></div>
        </div>
        
        <CategoryScroller />
        
        <FeaturedItems />
        
        {/* Burgers Section */}
        <section className="py-4">
          <div className="container px-4">
            <h2 className="font-bold text-xl text-gray-900 mb-4">Бургеры</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {burgers.map(burger => (
                <FoodCard key={burger.id} product={burger} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Pizzas Section */}
        <section className="py-4">
          <div className="container px-4">
            <h2 className="font-bold text-xl text-gray-900 mb-4">Пицца</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {pizzas.map(pizza => (
                <FoodCard key={pizza.id} product={pizza} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import VictoryLogo from "./VictoryLogo";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:py-32 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background -z-10"></div>
      
      {/* Декоративный элемент */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-primary/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-secondary/5 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fadeInUp" style={{animationDelay: "0.1s", animationFillMode: "forwards"}}>
              Уроки Победы
              <span className="block text-primary">для нового поколения</span>
            </h1>
            <p className="text-lg mb-8 max-w-md text-muted-foreground opacity-0 animate-fadeInUp" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
              Образовательный проект, направленный на сохранение исторической памяти 
              и воспитание патриотизма у молодого поколения россиян
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
              <Button size="lg">
                Начать обучение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative opacity-0 animate-fadeInUp" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
              <VictoryLogo size="xl" />
              <div className="absolute -z-10 inset-0 blur-3xl bg-primary/20 rounded-full transform scale-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

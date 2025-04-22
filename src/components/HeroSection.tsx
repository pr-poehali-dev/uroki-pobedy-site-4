import { Button } from "@/components/ui/button";
import VictoryLogo from "./VictoryLogo";
import { ArrowRight, Award, BookOpen, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:py-32 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background -z-10"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-primary/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-secondary/5 rounded-tr-full -z-10"></div>
      
      {/* Анимированные фоновые фигуры */}
      <div className="absolute top-1/4 left-10 w-12 h-12 bg-primary/10 rounded-full animate-pulse-gentle -z-10" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-pulse-gentle -z-10" style={{animationDelay: "1.2s"}}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/10 rotate-45 animate-pulse-gentle -z-10" style={{animationDelay: "0.8s"}}></div>
      
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
            
            {/* Ключевые преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 opacity-0 animate-fadeInUp" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">350+ уроков</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Сертификаты</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Вся Россия</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
              <Button size="lg" className="group">
                Начать обучение
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      
      {/* Волна */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 -z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block h-12 w-full"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57,14.28,136.33,48.48,321.39,56.44Z" 
            fill="rgba(255, 255, 255, 0.1)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

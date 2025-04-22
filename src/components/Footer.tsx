import { Link } from "react-router-dom";
import VictoryLogo from "./VictoryLogo";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/5 pt-16 pb-8 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block h-12 w-full rotate-180"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57,14.28,136.33,48.48,321.39,56.44Z" 
            fill="rgba(220, 20, 60, 0.05)"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Колонка с логотипом */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <VictoryLogo size="sm" />
              <div className="font-bold text-lg">
                Уроки <span className="text-primary">Победы</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Проект "Уроки Победы" разработан при поддержке Министерства образования РФ для сохранения исторической 
              памяти и патриотического воспитания молодежи.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Быстрые ссылки */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Полезные ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О проекте</a>
              </li>
              <li>
                <a href="#lessons" className="text-muted-foreground hover:text-primary transition-colors">Образовательные материалы</a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Мероприятия</a>
              </li>
              <li>
                <a href="#heroes" className="text-muted-foreground hover:text-primary transition-colors">Герои проекта</a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Фотогалерея</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для учителей</a>
              </li>
            </ul>
          </div>
          
          {/* Важные ресурсы */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Партнеры проекта</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://edu.gov.ru/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Министерство образования РФ</a>
              </li>
              <li>
                <a href="https://pobeda.mil.ru/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Портал "История.РФ"</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Российское военно-историческое общество</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Музей Победы</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Юнармия</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Поисковое движение России</a>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">8 (800) 123-45-67 <br /><span className="text-xs">(бесплатно по России)</span></span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">info@урокипобеды.рф</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">г. Москва, ул. Тверская, 13</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4">Связаться с нами</Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} "Уроки Победы". Все права защищены.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="hover:text-primary transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

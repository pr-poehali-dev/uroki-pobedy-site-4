import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent pt-16 pb-8 patriotic-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Уроки Победы</h3>
            <p className="text-muted-foreground mb-4">
              Образовательный проект для сохранения исторической памяти и воспитания патриотизма
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">ВКонтакте</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Телеграм</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">YouTube</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О проекте</a></li>
              <li><a href="#lessons" className="text-muted-foreground hover:text-primary transition-colors">Материалы</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Мероприятия</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Методические материалы</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Архив событий</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Галерея</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Часто задаваемые вопросы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Подписка на новости</h3>
            <p className="text-muted-foreground mb-4">Будьте в курсе последних новостей и мероприятий</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Ваш email" className="max-w-[220px]" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Уроки Победы. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center">
            Сделано с <Heart className="h-3 w-3 mx-1 text-primary" fill="currentColor" /> к России
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

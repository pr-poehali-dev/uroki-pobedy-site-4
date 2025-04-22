import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 patriotic-border ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center">
              <div className="h-10 w-10 relative">
                <div className="absolute inset-0 animate-float">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path 
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-primary"
                    />
                  </svg>
                </div>
              </div>
              <span className="ml-2 text-lg font-bold text-gradient">Уроки Победы</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О проекте</a>
            <a href="#lessons" className="text-sm font-medium hover:text-primary transition-colors">Материалы</a>
            <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">Мероприятия</a>
            <Button>Присоединиться</Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-3 p-4">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">Главная</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors py-2">О проекте</a>
            <a href="#lessons" className="text-sm font-medium hover:text-primary transition-colors py-2">Материалы</a>
            <a href="#events" className="text-sm font-medium hover:text-primary transition-colors py-2">Мероприятия</a>
            <Button className="w-full">Присоединиться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

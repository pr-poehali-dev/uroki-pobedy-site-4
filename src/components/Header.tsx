import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VictoryLogo from "./VictoryLogo";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", href: "#" },
    { name: "О проекте", href: "#about" },
    { name: "Материалы", href: "#lessons" },
    { name: "Мероприятия", href: "#events" },
    { name: "Герои", href: "#heroes" },
    { name: "Галерея", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flag-ribbon transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <VictoryLogo size="sm" className="shrink-0" />
            <div className="font-bold text-lg md:text-xl">
              Уроки <span className="text-primary">Победы</span>
            </div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" variant="secondary" className="ml-2">
              Войти
            </Button>
          </nav>

          {/* Мобильное меню */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Мобильная навигация */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fadeInUp">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" variant="secondary" className="mt-2">
                Войти
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

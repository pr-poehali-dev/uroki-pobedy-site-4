import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Calendar, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        
        {/* Секция материалов */}
        <section id="lessons" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Образовательные материалы</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Изучайте историю России с помощью современных образовательных материалов, 
                разработанных ведущими историками и педагогами
              </p>
            </div>
            
            <Tabs defaultValue="elementary" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="elementary">Начальная школа</TabsTrigger>
                <TabsTrigger value="middle">Средняя школа</TabsTrigger>
                <TabsTrigger value="high">Старшая школа</TabsTrigger>
              </TabsList>
              
              {["elementary", "middle", "high"].map((level) => (
                <TabsContent key={level} value={level} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                      <Card key={item} className="hover:shadow-md transition-shadow overflow-hidden group">
                        <div className="h-1 bg-primary"></div>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Урок {item}: {level === "elementary" ? "Основы патриотизма" : 
                              level === "middle" ? "Великие победы России" : "Стратегия и тактика"}
                          </CardTitle>
                          <CardDescription>
                            {level === "elementary" ? "Базовые понятия для младших школьников" : 
                              level === "middle" ? "Подробный разбор исторических событий" : 
                              "Углубленный анализ военных операций"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm text-muted-foreground">Продолжительность: 45 мин</span>
                            </div>
                            <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                              Начать <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-center mt-6">
                    <Button variant="outline">Показать все материалы</Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Секция мероприятий */}
        <section id="events" className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Предстоящие мероприятия</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к нашим патриотическим мероприятиям и конкурсам, 
                чтобы почтить память героев и проявить свои таланты
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Конкурс эссе",
                  date: "15 мая 2025",
                  desc: "Творческий конкурс на тему \"Что значит быть патриотом в современном мире\"",
                  icon: <Star className="h-5 w-5 text-primary" />
                },
                {
                  title: "Исторический квест",
                  date: "9 июня 2025",
                  desc: "Командная игра с заданиями по истории России и военным победам",
                  icon: <Calendar className="h-5 w-5 text-primary" />
                },
                {
                  title: "Встреча с ветеранами",
                  date: "22 июня 2025",
                  desc: "Живое общение с героями нашей страны и сохранение исторической памяти",
                  icon: <Star className="h-5 w-5 text-primary" />
                }
              ].map((event, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      {event.icon}
                      <span className="text-sm px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                        {event.date}
                      </span>
                    </div>
                    <CardTitle className="mt-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.desc}</p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к проекту "Уроки Победы"</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Вместе мы сохраним историческую память о великих победах и воспитаем 
              новое поколение патриотов, гордящихся своей страной
            </p>
            <Button size="lg" className="animate-pulse-gentle">
              Стать участником проекта
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

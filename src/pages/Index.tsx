import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Award, BookOpen, Calendar, FileText, Flag, MapPin, Medal, Shield, Star, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const heroProfiles = [
    {
      name: "Жуков Георгий Константинович",
      title: "Маршал Советского Союза",
      description: "Четырежды Герой Советского Союза, принимал участие в разгроме немецко-фашистских войск под Москвой, при прорыве блокады Ленинграда, в Сталинградской битве, Курской битве и в Берлинской операции.",
      image: "/placeholder.svg"
    },
    {
      name: "Покрышкин Александр Иванович",
      title: "Маршал авиации",
      description: "Первый трижды Герой Советского Союза, один из основоположников советской школы воздушного боя. Сбил 59 вражеских самолетов лично и 6 в группе.",
      image: "/placeholder.svg"
    },
    {
      name: "Матросов Александр Матвеевич",
      title: "Красноармеец",
      description: "Герой Советского Союза. Закрыл своим телом амбразуру немецкого дзота, что позволило его батальону выполнить боевую задачу. Его подвиг стал символом мужества и воинской доблести.",
      image: "/placeholder.svg"
    }
  ];

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
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Знания</span>
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
                    {[
                      {
                        title: level === "elementary" ? "Основы патриотизма" : 
                          level === "middle" ? "Великие победы России" : "Стратегия и тактика",
                        desc: level === "elementary" ? "Знакомство с понятиями патриотизма, Родины и государства через игровые форматы и яркие примеры" : 
                          level === "middle" ? "Изучение ключевых сражений и побед от Ледового побоища до взятия Берлина" : 
                          "Аналитический разбор военных операций и стратегических решений полководцев",
                        duration: "45 мин",
                        complexity: "Базовый"
                      },
                      {
                        title: level === "elementary" ? "Символы России" : 
                          level === "middle" ? "Герои нашей страны" : "Дипломатия военного времени",
                        desc: level === "elementary" ? "Интерактивное знакомство с государственными символами: флагом, гербом и гимном России" : 
                          level === "middle" ? "Биографии выдающихся полководцев и героев, внесших вклад в историю нашей страны" : 
                          "Международные отношения и дипломатические ходы в годы Великой Отечественной войны",
                        duration: "50 мин",
                        complexity: "Средний"
                      },
                      {
                        title: level === "elementary" ? "Наша великая история" : 
                          level === "middle" ? "Блокада Ленинграда" : "Экономика военного времени",
                        desc: level === "elementary" ? "Яркие страницы истории России, рассказанные простым и понятным языком для младших школьников" : 
                          level === "middle" ? "Героическая оборона Ленинграда, выживание города и подвиг его жителей" : 
                          "Экономические аспекты войны, эвакуация промышленности и трудовой подвиг народа",
                        duration: "60 мин",
                        complexity: "Углубленный"
                      },
                      {
                        title: level === "elementary" ? "Маленькие герои большой войны" : 
                          level === "middle" ? "Сталинградская битва" : "Техника и вооружение",
                        desc: level === "elementary" ? "Рассказы о детях-героях Великой Отечественной войны, их подвигах и храбрости" : 
                          level === "middle" ? "Коренной перелом войны, ход Сталинградской битвы и ее значение" : 
                          "Развитие военной техники и вооружения в годы войны, конструкторы и их разработки",
                        duration: "55 мин",
                        complexity: "Продвинутый"
                      }
                    ].map((item, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden group">
                        <div className="h-1 bg-primary"></div>
                        <CardHeader>
                          <div className="flex justify-between">
                            <CardTitle className="flex items-center gap-2">
                              <BookOpen className="h-5 w-5 text-primary" />
                              {item.title}
                            </CardTitle>
                            <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                              {item.complexity}
                            </span>
                          </div>
                          <CardDescription>
                            {item.desc}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm text-muted-foreground">Продолжительность: {item.duration}</span>
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
        
        {/* Секция героев проекта */}
        <section id="heroes" className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">Наша гордость</span>
              <h2 className="text-3xl font-bold mb-4">Герои Победы</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                В нашем проекте особое внимание уделяется героям, благодаря которым была достигнута Великая Победа. 
                Их подвиги навсегда останутся в истории нашей страны.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {heroProfiles.map((hero, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={hero.image} alt={hero.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-1">
                      <Medal className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">{hero.title}</span>
                    </div>
                    <CardTitle className="text-xl">{hero.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{hero.description}</p>
                    <Button variant="outline" className="w-full">Подробная биография</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button>Узнать о других героях</Button>
            </div>
          </div>
        </section>
        
        {/* Фотогалерея */}
        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Фотоархив</span>
              <h2 className="text-3xl font-bold mb-4">Галерея проекта</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Уникальные фотографии военных лет и современных патриотических мероприятий в рамках проекта "Уроки Победы"
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className={`relative aspect-square overflow-hidden rounded-lg ${
                  item === 1 ? "md:col-span-2 md:row-span-2" : item === 4 ? "md:col-span-2" : ""
                }`}>
                  <img 
                    src="/placeholder.svg" 
                    alt={`Галерея изображение ${item}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">Увеличить</Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline">Смотреть все фото</Button>
            </div>
          </div>
        </section>
        
        {/* Секция мероприятий */}
        <section id="events" className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Участвуйте</span>
              <h2 className="text-3xl font-bold mb-4">Предстоящие мероприятия</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к нашим патриотическим мероприятиям и конкурсам, 
                чтобы почтить память героев и проявить свои таланты
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Всероссийский конкурс эссе",
                  date: "15 мая 2025",
                  desc: "Творческий конкурс на тему \"Что значит быть патриотом в современном мире\". Лучшие работы будут опубликованы в сборнике и отмечены ценными призами.",
                  icon: <FileText className="h-5 w-5 text-primary" />,
                  tag: "Конкурс"
                },
                {
                  title: "Исторический квест \"Дорогами Победы\"",
                  date: "9 июня 2025",
                  desc: "Командная игра с заданиями по истории России и военным победам. Участники пройдут по маршруту с историческими загадками и испытаниями.",
                  icon: <Flag className="h-5 w-5 text-primary" />,
                  tag: "Событие"
                },
                {
                  title: "Встреча с ветеранами",
                  date: "22 июня 2025",
                  desc: "Живое общение с героями нашей страны и сохранение исторической памяти. Мероприятие пройдет в центральном парке Победы с возможностью записи воспоминаний.",
                  icon: <User className="h-5 w-5 text-primary" />,
                  tag: "Встреча"
                }
              ].map((event, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      {event.icon}
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {event.tag}
                        </span>
                        <span className="text-sm px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                          {event.date}
                        </span>
                      </div>
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
            
            <div className="bg-white/50 rounded-xl p-8 shadow-lg mt-12 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Календарь значимых дат</h3>
              
              <div className="space-y-4">
                {[
                  { date: "27 января", title: "День полного освобождения Ленинграда от фашистской блокады", year: "1944" },
                  { date: "2 февраля", title: "День разгрома советскими войсками немецко-фашистских войск в Сталинградской битве", year: "1943" },
                  { date: "9 мая", title: "День Победы советского народа в Великой Отечественной войне", year: "1945" },
                  { date: "22 июня", title: "День памяти и скорби – день начала Великой Отечественной войны", year: "1941" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-medium">{item.date.split(" ")[0]}</span>
                      <span className="text-xs">{item.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center">
                        {item.title}
                        <span className="ml-2 text-sm px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {item.year}
                        </span>
                      </h4>
                      <Button variant="link" className="p-0 h-auto text-primary" size="sm">
                        Подробнее <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                    {index < 3 && <Separator className="my-2" />}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Button>Полный календарь памятных дат</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Достижения проекта */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Наши результаты</span>
              <h2 className="text-3xl font-bold mb-4">Достижения проекта</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                За время работы проекта "Уроки Победы" мы достигли значительных результатов 
                в деле патриотического воспитания молодежи
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Учебных заведений", icon: BookOpen },
                { value: "10 000+", label: "Школьников", icon: User },
                { value: "350+", label: "Образовательных материалов", icon: FileText },
                { value: "78", label: "Регионов России", icon: MapPin }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Награды проекта</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Национальная премия в сфере образования</p>
                        <p className="text-sm text-muted-foreground">За инновационный подход к патриотическому воспитанию</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Президентский грант</p>
                        <p className="text-sm text-muted-foreground">За вклад в сохранение исторической памяти</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Международная премия "Наследие"</p>
                        <p className="text-sm text-muted-foreground">За популяризацию истории среди молодежи</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Отзывы о проекте</h3>
                  <div className="space-y-4">
                    <div className="bg-accent/30 p-4 rounded-lg">
                      <p className="italic text-sm mb-2">
                        "Проект 'Уроки Победы' помог нашим ученикам по-новому взглянуть на историю своей страны. 
                        Интерактивные материалы вызывают живой интерес у детей."
                      </p>
                      <p className="text-sm font-medium">Елена Петрова</p>
                      <p className="text-xs text-muted-foreground">Директор школы №152, г. Москва</p>
                    </div>
                    <div className="bg-accent/30 p-4 rounded-lg">
                      <p className="italic text-sm mb-2">
                        "Благодаря проекту мои ученики стали больше интересоваться историей России. 
                        Качество материалов на высоте!"
                      </p>
                      <p className="text-sm font-medium">Александр Иванов</p>
                      <p className="text-xs text-muted-foreground">Учитель истории, г. Санкт-Петербург</p>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="animate-pulse-gentle">
                Стать участником проекта
              </Button>
              <Button size="lg" variant="outline">
                Для учителей и школ
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

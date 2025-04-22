import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Calendar, FileText, Medal, Shield, Star, User, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import RunningLine from "@/components/RunningLine";
import QuotesSection from "@/components/QuotesSection";
import LiveGallery from "@/components/LiveGallery";

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
      <RunningLine />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        
        {/* Секция цитат */}
        <QuotesSection />
        
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
        
        {/* Фотогалерея в режиме "онлайн" */}
        <LiveGallery />
        
        {/* Достижения проекта */}
        <section className="py-16 bg-gradient-to-r from-red-50 via-white to-blue-50">
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
            
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-5xl mx-auto border-2 border-red-100">
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
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                  <h3 className="text-xl font-bold mb-4">Отзывы о проекте</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="italic text-sm mb-2">
                        "Проект 'Уроки Победы' помог нашим ученикам по-новому взглянуть на историю своей страны. 
                        Интерактивные материалы вызывают живой интерес у детей."
                      </p>
                      <p className="text-sm font-medium">Елена Петрова</p>
                      <p className="text-xs text-muted-foreground">Директор школы №152, г. Москва</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
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
        <section className="py-16 bg-gradient-to-r from-red-100 via-white to-blue-100">
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

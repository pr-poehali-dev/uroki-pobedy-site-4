import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Medal, Users, Globe, Flag, Shield, Star } from "lucide-react";

const features = [
  {
    title: "Интерактивные уроки",
    description: "Современные образовательные материалы с использованием мультимедийных технологий и исторических документов",
    icon: BookOpen,
  },
  {
    title: "Исторические события",
    description: "Подробный календарь памятных дат и важнейших событий в истории нашей Родины с 1941 по 1945 годы",
    icon: Calendar,
  },
  {
    title: "Сообщество патриотов",
    description: "Объединение учителей, учеников и всех неравнодушных граждан, заинтересованных в сохранении исторической памяти",
    icon: Users,
  },
  {
    title: "Конкурсы и награды",
    description: "Всероссийские конкурсы эссе, рисунков и проектов на тему патриотизма с ценными призами и наградами",
    icon: Medal,
  },
];

const moreFeatures = [
  {
    title: "Виртуальные экскурсии",
    description: "Интерактивные 3D-туры по местам боевой славы и музеям Великой Отечественной войны",
    icon: Globe,
  },
  {
    title: "Патриотические клубы",
    description: "Поддержка деятельности патриотических клубов и движений по всей России",
    icon: Flag,
  },
  {
    title: "Защита правды",
    description: "Противодействие фальсификации истории и сохранение исторической правды о Великой Победе",
    icon: Shield,
  },
  {
    title: "Наставничество героев",
    description: "Программы наставничества с участием ветеранов и героев современной России",
    icon: Star,
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Наш подход</span>
          <h2 className="text-3xl font-bold mb-4">О проекте "Уроки Победы"</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Проект создан для формирования у молодежи чувства патриотизма, 
            гордости за свою страну и уважения к ее историческому наследию. 
            Мы используем современные технологии, чтобы сделать историю доступной и увлекательной.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white/50 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Миссия проекта</h3>
              <p className="mb-4">
                Наша миссия — сохранить историческую память о подвиге нашего народа в Великой Отечественной войне
                и других важных событиях истории России, передать эти знания новому поколению в современной, 
                доступной и увлекательной форме.
              </p>
              <p className="mb-4">
                Мы стремимся воспитать поколение граждан, которые:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Знают и уважают историю своей страны</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Гордятся героическим прошлым России</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Готовы сами вершить великие дела</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moreFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                      <feature.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h4 className="font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Medal, Users } from "lucide-react";

const features = [
  {
    title: "Интерактивные уроки",
    description: "Современные образовательные материалы с использованием мультимедийных технологий",
    icon: BookOpen,
  },
  {
    title: "Исторические события",
    description: "Календарь памятных дат и важнейших событий в истории нашей Родины",
    icon: Calendar,
  },
  {
    title: "Сообщество патриотов",
    description: "Объединение учителей, учеников и всех неравнодушных граждан",
    icon: Users,
  },
  {
    title: "Конкурсы и награды",
    description: "Участие в патриотических мероприятиях и возможность получить признание",
    icon: Medal,
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">О проекте</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Проект "Уроки Победы" создан для формирования у молодежи чувства патриотизма, 
            гордости за свою страну и уважения к ее историческому наследию
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default FeaturesSection;

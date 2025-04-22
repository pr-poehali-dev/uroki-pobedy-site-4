import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Народ, не знающий своего прошлого, не имеет будущего.",
    author: "Михаил Ломоносов",
    role: "Учёный, поэт, первый русский академик"
  },
  {
    text: "Мы должны строить своё будущее на прочном фундаменте. И этот фундамент – патриотизм.",
    author: "Владимир Путин",
    role: "Президент Российской Федерации"
  },
  {
    text: "Величие страны не в соразмерности её территории, а в осознании своего величия в умах и сердцах людей.",
    author: "Пётр I",
    role: "Первый Император Всероссийский"
  },
  {
    text: "Гордиться славою своих предков не только можно, но и должно; не уважать оной есть постыдное малодушие.",
    author: "А.С. Пушкин",
    role: "Великий русский поэт"
  },
  {
    text: "Мы обязаны защищать и отстаивать исторические факты, опираясь на документы, а не на политически мотивированные домыслы.",
    author: "Сергей Лавров",
    role: "Министр иностранных дел РФ"
  },
  {
    text: "Важно не то, где ты родился. Важно, для чего.",
    author: "В.М. Шукшин",
    role: "Писатель, кинорежиссёр, актёр"
  },
  {
    text: "История России — это история преодоления трудностей и великих побед.",
    author: "Сергей Шойгу",
    role: "Министр обороны РФ"
  },
  {
    text: "Главное богатство любой страны — это люди. И наша страна богата талантливыми, трудолюбивыми, преданными Отечеству людьми.",
    author: "Валентина Матвиенко",
    role: "Председатель Совета Федерации"
  },
  {
    text: "Есть такая профессия — Родину защищать!",
    author: "Из к/ф «Офицеры»",
    role: "Крылатая фраза"
  }
];

const QuotesSection = () => {
  const [activeQuotes, setActiveQuotes] = useState<typeof quotes>([]);
  
  useEffect(() => {
    // Выбираем 3 случайные цитаты без повторений
    const getRandomQuotes = () => {
      const shuffled = [...quotes].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };
    
    setActiveQuotes(getRandomQuotes());
    
    // Обновляем цитаты каждые 24 часа
    const intervalId = setInterval(() => {
      setActiveQuotes(getRandomQuotes());
    }, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-r from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Мудрость поколений</span>
          <h2 className="text-3xl font-bold mb-4">Цитаты о патриотизме и России</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Слова выдающихся государственных деятелей, исторических личностей и современников 
            о значимости патриотизма, исторической памяти и любви к Родине
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {activeQuotes.map((quote, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/20 transition-all">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/40 mb-4" />
                <p className="text-lg italic mb-6">{quote.text}</p>
                <Separator className="mb-4" />
                <div>
                  <p className="font-semibold">{quote.author}</p>
                  <p className="text-sm text-muted-foreground">{quote.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;

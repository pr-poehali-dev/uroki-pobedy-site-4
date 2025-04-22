import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Maximize, RefreshCw } from "lucide-react";

// Список категорий фотографий для "онлайн-трансляции"
const photoCategories = [
  "Парад Победы",
  "Бессмертный полк",
  "Ветераны ВОВ",
  "Военная техника",
  "Памятники героям",
  "Реконструкции сражений"
];

// Функция для генерации псевдо-случайного времени для "онлайн" фотографий
const generateRandomTime = () => {
  const now = new Date();
  // Генерируем случайное смещение от -30 до -1 минут
  const minutesOffset = Math.floor(Math.random() * 30) + 1;
  now.setMinutes(now.getMinutes() - minutesOffset);
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const LiveGallery = () => {
  const [photos, setPhotos] = useState<Array<{
    id: number;
    url: string;
    location: string;
    time: string;
    category: string;
    isLive: boolean;
  }>>([]);
  
  const [refreshing, setRefreshing] = useState(false);
  
  const refreshGallery = () => {
    setRefreshing(true);
    
    // Имитация обновления фотографий
    setTimeout(() => {
      generatePhotos();
      setRefreshing(false);
    }, 1500);
  };
  
  const generatePhotos = () => {
    const newPhotos = Array.from({ length: 8 }, (_, i) => {
      const category = photoCategories[Math.floor(Math.random() * photoCategories.length)];
      const isLive = Math.random() > 0.3; // 70% фото будут "живыми"
      
      // Генерируем случайные города России
      const cities = [
        "Москва", "Санкт-Петербург", "Волгоград", "Севастополь", 
        "Тула", "Новороссийск", "Керчь", "Мурманск", "Смоленск", 
        "Владивосток", "Екатеринбург", "Брест", "Минск"
      ];
      const location = cities[Math.floor(Math.random() * cities.length)];
      
      return {
        id: i + 1,
        url: `/placeholder.svg`,
        location,
        time: generateRandomTime(),
        category,
        isLive
      };
    });
    
    setPhotos(newPhotos);
  };
  
  useEffect(() => {
    generatePhotos();
    
    // Обновляем галерею каждые 3 минуты
    const intervalId = setInterval(() => {
      generatePhotos();
    }, 3 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section id="gallery" className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Фотоархив</span>
            <h2 className="text-3xl font-bold">Онлайн-трансляция событий</h2>
          </div>
          <Button 
            variant="outline" 
            onClick={refreshGallery} 
            disabled={refreshing}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            Обновить
          </Button>
        </div>
        
        <p className="text-muted-foreground max-w-2xl mb-8">
          Прямая трансляция фотографий с мероприятий, посвященных сохранению памяти 
          о Великой Отечественной войне и патриотическому воспитанию по всей России
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className={`relative aspect-square overflow-hidden rounded-lg ${
                photo.id === 1 ? "md:col-span-2 md:row-span-2" : photo.id === 4 ? "md:col-span-2" : ""
              } border-2 ${photo.isLive ? 'border-red-500 pulse-border' : 'border-gray-200'}`}
            >
              <img 
                src={photo.url} 
                alt={`${photo.category} в ${photo.location}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent text-white p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">{photo.category}</p>
                    <p className="text-xs flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                      {photo.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {photo.isLive ? (
                      <span className="text-xs bg-red-500 rounded px-1.5 py-0.5 animate-pulse">LIVE</span>
                    ) : (
                      <span className="text-xs">{photo.time}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2">
                <Button variant="secondary" size="icon" className="rounded-full w-8 h-8 opacity-80 hover:opacity-100">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button>Открыть полную галерею</Button>
        </div>
      </div>
    </section>
  );
};

export default LiveGallery;

import { useEffect, useState } from "react";

const congratulations = [
  "Поздравляем с приближающимся 80-летием Великой Победы! 🎉",
  "Слава героям! Помним и гордимся подвигом нашего народа! ⭐",
  "9 мая - день, который объединяет поколения! 🇷🇺",
  "Вечная память павшим за Родину! Спасибо за мирное небо! 🕊️",
  "С наступающим праздником Победы! Ура героям! 🎖️",
  "80 лет мирного неба - спасибо нашим ветеранам! 🙏",
  "Великая Победа - гордость России на все времена! ❤️",
  "Мы - наследники Великой Победы! Помним и чтим! 🏆",
  "Благодарим за свободу и независимость нашей Родины! 🌟",
  "Никто не забыт, ничто не забыто! С наступающим Днём Победы! 🎗️"
];

const RunningLine = () => {
  const [currentCongratulation, setCurrentCongratulation] = useState("");
  
  useEffect(() => {
    // Выбираем случайное поздравление при первом рендере
    const randomIndex = Math.floor(Math.random() * congratulations.length);
    setCurrentCongratulation(congratulations[randomIndex]);
    
    // Устанавливаем интервал для обновления поздравления каждые 30 минут
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * congratulations.length);
      setCurrentCongratulation(congratulations[newIndex]);
    }, 30 * 60 * 1000); // 30 минут
    
    // Для демонстрационных целей можно установить более короткий интервал
    const demoIntervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * congratulations.length);
      setCurrentCongratulation(congratulations[newIndex]);
    }, 10 * 1000); // 10 секунд для демо
    
    return () => {
      clearInterval(intervalId);
      clearInterval(demoIntervalId);
    };
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-red-700 via-blue-700 to-red-700 text-white py-2 overflow-hidden">
      <div className="running-text animate-marquee whitespace-nowrap">
        <span className="mx-4 text-lg font-medium">★</span>
        <span className="mx-4 text-lg font-medium">{currentCongratulation}</span>
        <span className="mx-4 text-lg font-medium">★</span>
        <span className="mx-4 text-lg font-medium">{currentCongratulation}</span>
        <span className="mx-4 text-lg font-medium">★</span>
        <span className="mx-4 text-lg font-medium">{currentCongratulation}</span>
        <span className="mx-4 text-lg font-medium">★</span>
        <span className="mx-4 text-lg font-medium">{currentCongratulation}</span>
      </div>
    </div>
  );
};

export default RunningLine;

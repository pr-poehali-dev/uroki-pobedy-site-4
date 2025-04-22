import { useEffect, useState } from "react";

interface VictoryLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const VictoryLogo = ({ className = "", size = "md" }: VictoryLogoProps) => {
  const [currentYear, setCurrentYear] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [angle, setAngle] = useState(0);
  
  useEffect(() => {
    // Обновляем текущий год
    const now = new Date();
    setCurrentYear(now.getFullYear().toString());
    
    // Обновляем текущее время каждую секунду
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
      
      // Медленное вращение звезды
      setAngle(prev => (prev + 0.2) % 360);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="w-full h-full relative">
          {/* Основа логотипа - звезда */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Радиальный градиент */}
            <defs>
              <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#ffcb05" />
                <stop offset="100%" stopColor="#e92431" />
              </radialGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Внешний круг */}
            <circle 
              cx="50" 
              cy="50" 
              r="48" 
              fill="none" 
              stroke="hsl(var(--victory-red))" 
              strokeWidth="2" 
              className="animate-pulse-gentle"
            />
            
            {/* Внутренний круг */}
            <circle 
              cx="50" 
              cy="50" 
              r="42" 
              fill="none" 
              stroke="hsl(var(--victory-blue))" 
              strokeWidth="1.5" 
            />
            
            {/* Звезда с вращением */}
            <g transform={`rotate(${angle} 50 50)`}>
              <path
                d="M50 15 L57.5 35.5 L79 35.5 L62 49 L69.5 69.5 L50 56 L30.5 69.5 L38 49 L21 35.5 L42.5 35.5 Z"
                fill="url(#starGradient)"
                stroke="none"
                filter="url(#glow)"
              />
            </g>
            
            {/* Текущий год */}
            <text 
              x="50" 
              y="82" 
              textAnchor="middle" 
              fill="hsl(var(--victory-blue))" 
              fontSize="10"
              fontWeight="bold"
              className="gold-text"
            >
              2025
            </text>
            
            {/* Лента */}
            <path
              d="M30 85 Q50 75 70 85"
              fill="none"
              stroke="hsl(var(--victory-red))"
              strokeWidth="3"
            />
            
            {/* Дополнительные декоративные элементы */}
            <circle cx="50" cy="50" r="37" fill="none" stroke="#ffcb05" strokeWidth="0.5" strokeDasharray="3,3" />
          </svg>
        </div>
      </div>
      
      {/* Текущее время (онлайн индикатор) */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-accent px-2 py-1 rounded-full text-secondary font-medium border border-secondary/20">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
        <span>{currentTime}</span>
      </div>
    </div>
  );
};

export default VictoryLogo;

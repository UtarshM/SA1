import React from 'react';
import { TrendingUp } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const iconSizes = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-9 w-9'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const gradientColor = variant === 'light' 
    ? 'from-blue-400 to-purple-400' 
    : 'from-blue-600 to-purple-600';

  return (
    <div className="flex items-center space-x-2">
      <div className={`bg-gradient-to-br ${gradientColor} rounded-lg p-1.5 shadow-lg`}>
        <TrendingUp className={`${iconSizes[size]} text-white`} strokeWidth={2.5} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${sizeClasses[size]} font-extrabold ${textColor} tracking-tight`}>
          Scalezix
        </span>
        <span className={`text-xs font-semibold ${variant === 'light' ? 'text-gray-300' : 'text-gray-600'} -mt-1`}>
          ACADEMY
        </span>
      </div>
    </div>
  );
};

export default Logo;

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Language = 'zh' | 'en';

interface LanguageToggleProps {
  onLanguageChange: (language: Language) => void;
  currentLanguage: Language;
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    const newLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    onLanguageChange(newLanguage);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-12 h-12 p-0 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 rounded-lg"
        title={currentLanguage === 'zh' ? 'Switch to English' : '切换到中文'}
      >
        <div className="relative w-6 h-6">
          {/* 英文图标 */}
          <div 
            className={`absolute inset-0 transition-all duration-300 ${
              currentLanguage === 'en' 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
          >
            <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-300 text-xs font-medium">En</span>
            </div>
          </div>
          
          {/* 中文图标 */}
          <div 
            className={`absolute inset-0 transition-all duration-300 ${
              currentLanguage === 'zh' 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
          >
            <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-300 text-sm font-medium">中</span>
            </div>
          </div>
        </div>
      </Button>
    
    </div>
  );
}

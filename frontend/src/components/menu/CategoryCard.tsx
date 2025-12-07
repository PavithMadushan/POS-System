import React, { memo } from 'react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  itemCount: number;
  iconName: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = memo(({ 
  id, name, itemCount, iconName, isActive, onClick 
}) => {
  // Dynamic icon rendering
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[iconName] || Icons.Utensils;

  return (
    <button
      onClick={() => onClick(id)}
      className={`
        flex flex-col items-start justify-between p-5 rounded-xl transition-all duration-200 min-w-[160px] h-36 border
        ${isActive 
          ? 'bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-200 scale-105' 
          : 'bg-white border-gray-200 text-gray-900 shadow-sm hover:shadow-md hover:border-pink-200'}
      `}
    >
      <div className={`
        p-3 rounded-lg transition-colors
        ${isActive ? 'bg-white/20 text-white' : 'bg-pink-50 text-pink-500'}
      `}>
        <IconComponent size={24} />
      </div>
      
      <div className="text-left">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className={`text-xs mt-1 font-medium ${isActive ? 'text-pink-100' : 'text-gray-500'}`}>
          {itemCount} items
        </p>
      </div>
    </button>
  );
});

export default CategoryCard;

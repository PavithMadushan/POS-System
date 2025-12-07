import React, { memo } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { MenuItem } from '../../types/menu.types';

interface MenuItemRowProps {
  item: MenuItem;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onEdit: (item: MenuItem) => void;
  onDelete: (id: string) => void;
}

const MenuItemRow: React.FC<MenuItemRowProps> = memo(({ 
  item, isSelected, onToggleSelect, onEdit, onDelete 
}) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
      <td className="px-4 py-4">
        <input 
          type="checkbox" 
          checked={isSelected}
          onChange={() => onToggleSelect(item.id)}
          className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500" 
        />
      </td>
      <td className="px-4 py-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </td>
      <td className="px-4 py-4">
        <div>
          <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
          <p className="text-xs text-gray-500 mt-0.5 truncate max-w-[200px]">{item.description}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500">{item.itemId}</td>
      <td className="px-4 py-4 text-sm text-gray-900 font-medium">{item.stock} items</td>
      <td className="px-4 py-4 text-sm text-gray-500">{item.category}</td>
      <td className="px-4 py-4 text-sm font-bold text-gray-900">${item.price.toFixed(2)}</td>
      <td className="px-4 py-4">
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${item.availability === 'In Stock' 
            ? 'bg-emerald-100 text-emerald-600' 
            : 'bg-red-100 text-red-600'}
        `}>
          {item.availability}
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onEdit(item)}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button 
            onClick={() => onDelete(item.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
});

export default MenuItemRow;

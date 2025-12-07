import React, { memo } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { type InventoryItem } from '../../types/inventory.types';

interface InventoryItemRowProps {
  item: InventoryItem;
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

const InventoryItemRow: React.FC<InventoryItemRowProps> = memo(({ item, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Image */}
      <div className="w-full sm:w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>

      {/* Content Grid */}
      <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        
        {/* Name & Stock Info (Col 1-5) */}
        <div className="sm:col-span-5">
          <h4 className="font-semibold text-gray-900">{item.name}</h4>
          <p className="text-sm text-pink-500 mt-1 font-medium">
            Stocked Product: <span className="text-pink-400/80 font-normal">{item.stockStatus}</span>
          </p>
        </div>

        {/* Status (Col 6-7) */}
        <div className="sm:col-span-2">
          <span className="text-xs text-gray-500 block mb-1 sm:hidden">Status</span>
          <span className={`
            inline-block px-2 py-1 rounded text-xs font-medium
            ${item.status === 'Active' ? 'text-emerald-600 bg-emerald-50' : ''}
            ${item.status === 'Inactive' ? 'text-gray-600 bg-gray-100' : ''}
            ${item.status === 'Draft' ? 'text-amber-600 bg-amber-50' : ''}
          `}>
            {item.status}
          </span>
        </div>

        {/* Category (Col 8-9) */}
        <div className="sm:col-span-2">
          <span className="text-xs text-gray-500 block mb-1 sm:hidden">Category</span>
          <p className="text-sm text-gray-600">{item.category}</p>
        </div>

        {/* Price (Col 10-11) */}
        <div className="sm:col-span-2">
          <span className="text-xs text-gray-500 block mb-1 sm:hidden">Retail Price</span>
          <p className="text-sm font-bold text-gray-900">${item.retailPrice.toFixed(2)}</p>
        </div>
        
        {/* Actions (Col 12) */}
        <div className="sm:col-span-1 flex justify-end gap-2">
           <button 
            onClick={() => onEdit(item)}
            className="p-1.5 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors"
          >
            <Edit2 size={16} />
          </button>
           <button 
            onClick={() => onDelete(item.id)}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>

      </div>
    </div>
  );
});

export default InventoryItemRow;

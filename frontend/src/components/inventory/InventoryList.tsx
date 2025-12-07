import React from 'react';
import InventoryItemRow from './InventoryItemRow';
import { type InventoryItem } from '../../types/inventory.types';

interface InventoryListProps {
  items: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ items, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {/* Column Headers (Hidden on mobile, visible on tablet/desktop) */}
      <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <div className="col-span-5">Product Name</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Retail Price</div>
        <div className="col-span-1 text-right">Action</div>
      </div>

      {/* Rows */}
      {items.map((item) => (
        <InventoryItemRow 
          key={item.id} 
          item={item} 
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default InventoryList;

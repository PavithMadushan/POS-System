import { useState } from 'react';
import { Plus } from 'lucide-react';
import InventoryFilters from '../components/inventory/InventoryFilters';
import InventoryList from '../components/inventory/InventoryList';
import AddInventoryModal from '../components/inventory/AddInventoryModal';
import type { InventoryFilterState, InventoryItem } from '../types/inventory.types';

// Mock Data
const INVENTORY_ITEMS: InventoryItem[] = Array(8).fill(null).map((_, i) => ({
  id: `INV-${i}`,
  name: 'Chicken Parmesan',
  image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80&w=200',
  stockStatus: '10 In Stock',
  status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Inactive' : 'Draft',
  category: 'Chicken',
  retailPrice: 55.00,
  isPerishable: true
}));

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<InventoryFilterState>({
    status: 'All',
    category: 'All',
    stockStatus: 'All',
    priceRange: { min: 50, max: 120 }
  });

  const handleResetFilters = () => {
    setFilters({
      status: 'All',
      category: 'All',
      stockStatus: 'All',
      priceRange: { min: 0, max: 0 }
    });
  };

  return (
    <div className="p-6 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
          <p className="text-sm text-gray-500 mt-1">150 total products</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 shadow-sm shadow-pink-200 transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          Add New Inventory
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Panel - Filters */}
        <div className="lg:col-span-1 sticky top-6">
          <InventoryFilters 
            filters={filters} 
            onFilterChange={setFilters} 
            onReset={handleResetFilters}
          />
        </div>

        {/* Right Panel - Inventory List */}
        <div className="lg:col-span-3">
          <InventoryList 
            items={INVENTORY_ITEMS} 
            onEdit={(item) => console.log('Edit', item)}
            onDelete={(id) => console.log('Delete', id)}
          />
        </div>

      </div>

      {/* Modals */}
      <AddInventoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Inventory;

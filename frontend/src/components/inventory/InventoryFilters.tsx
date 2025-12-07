import React from 'react';
import { RotateCcw } from 'lucide-react';
import { type InventoryFilterState, type ProductStatus } from '../../types/inventory.types';

interface InventoryFiltersProps {
  filters: InventoryFilterState;
  onFilterChange: (filters: InventoryFilterState) => void;
  onReset: () => void;
}

const InventoryFilters: React.FC<InventoryFiltersProps> = ({ filters, onFilterChange, onReset }) => {
  const handleChange = (key: keyof InventoryFilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const statusOptions: { label: string; value: 'All' | ProductStatus; count: number }[] = [
    { label: 'All', value: 'All', count: 150 },
    { label: 'Active', value: 'Active', count: 120 },
    { label: 'Inactive', value: 'Inactive', count: 10 },
    { label: 'Draft', value: 'Draft', count: 10 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-fit">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Filters</h3>

      {/* Product Status Grid */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700 block mb-3">Product Status</label>
        <div className="grid grid-cols-2 gap-3">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleChange('status', option.value)}
              className={`
                flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition-all
                ${filters.status === option.value
                  ? 'bg-pink-50 border-pink-500 text-pink-600'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'}
              `}
            >
              <span>{option.label}</span>
              <span className={`text-xs ${filters.status === option.value ? 'opacity-100' : 'opacity-60'}`}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700 block mb-2">Category</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
        >
          <option value="All">All Categories</option>
          <option value="Chicken">Chicken</option>
          <option value="Seafood">Seafood</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>

      {/* Stock Status */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700 block mb-2">Stock</label>
        <select
          value={filters.stockStatus}
          onChange={(e) => handleChange('stockStatus', e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
        >
          <option value="All">All Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="text-sm font-medium text-gray-700 block mb-2">Price Range</label>
        <div className="space-y-3">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
            <input
              type="number"
              value={filters.priceRange.min}
              onChange={(e) => handleChange('priceRange', { ...filters.priceRange, min: parseInt(e.target.value) })}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-7 pr-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
              placeholder="Min"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
            <input
              type="number"
              value={filters.priceRange.max}
              onChange={(e) => handleChange('priceRange', { ...filters.priceRange, max: parseInt(e.target.value) })}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-7 pr-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full flex items-center justify-center gap-2 bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100 hover:border-pink-300 py-2.5 rounded-lg font-medium transition-all"
      >
        <RotateCcw size={16} />
        Reset Filters
      </button>
    </div>
  );
};

export default InventoryFilters;

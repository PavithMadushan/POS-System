import { useState, useCallback } from 'react';
import { Plus} from 'lucide-react';
import CategoryCard from '../components/menu/CategoryCard';
import MenuItemRow from '../components/menu/MenuItemRow';
import AddCategoryModal from '../components/menu/AddCategoryModal';
import type { Category, MenuItem, MenuTab } from '../types/menu.types';

// Dummy Data
const CATEGORIES: Category[] = [
  { id: '1', name: 'All', itemCount: 116, icon: 'LayoutGrid' },
  { id: '2', name: 'Pizza', itemCount: 20, icon: 'Pizza' },
  { id: '3', name: 'Burger', itemCount: 15, icon: 'Sandwich' }, // Lucide doesn't have Burger, using Sandwich
  { id: '4', name: 'Chicken', itemCount: 10, icon: 'Drumstick' },
  { id: '5', name: 'Bakery', itemCount: 18, icon: 'Croissant' },
  { id: '6', name: 'Beverage', itemCount: 12, icon: 'CupSoda' },
  { id: '7', name: 'Seafood', itemCount: 16, icon: 'Fish' },
];

const ITEMS: MenuItem[] = Array(5).fill({
  id: '1',
  name: 'Chicken Parmesan',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  itemId: '#22314644',
  stock: 119,
  category: 'Chicken',
  price: 55.00,
  availability: 'In Stock',
  image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80&w=200'
}).map((item, i) => ({ ...item, id: i.toString() }));

const MenuManagement = () => {
  const [activeCategory, setActiveCategory] = useState('1');
  const [activeTab, setActiveTab] = useState<MenuTab>('Normal Menu');
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategory(id);
  }, []);

  const handleToggleSelect = useCallback((id: string) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  }, []);

  return (
    <div className="p-6 space-y-8 bg-gray-50/50 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your categories and menu items</p>
        </div>
      </div>

      {/* Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">Categories</h2>
          <button 
            onClick={() => setIsCategoryModalOpen(true)}
            className="px-4 py-2 bg-pink-100 text-pink-600 rounded-lg text-sm font-medium hover:bg-pink-200 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Add New Category
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
          {CATEGORIES.map(category => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              itemCount={category.itemCount}
              iconName={category.icon}
              isActive={activeCategory === category.id}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-gray-800">Special menu all items</h2>
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 shadow-sm shadow-pink-200 transition-all flex items-center gap-2">
            <Plus size={18} />
            Add Menu Item
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex gap-8 overflow-x-auto">
            {['Normal Menu', 'Special Deals', 'New Year Special', 'Deserts and Drinks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as MenuTab)}
                className={`
                  pb-3 text-sm font-medium whitespace-nowrap transition-all relative
                  ${activeTab === tab 
                    ? 'text-pink-500' 
                    : 'text-gray-500 hover:text-gray-700'}
                `}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left w-12">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Item ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Availability</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ITEMS.map((item) => (
                  <MenuItemRow
                    key={item.id}
                    item={item}
                    isSelected={selectedItems.has(item.id)}
                    onToggleSelect={handleToggleSelect}
                    onEdit={(i) => console.log('Edit', i)}
                    onDelete={(id) => console.log('Delete', id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Placeholder */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 1-10 of 119 items</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AddCategoryModal 
        isOpen={isCategoryModalOpen} 
        onClose={() => setIsCategoryModalOpen(false)} 
      />
    </div>
  );
};

export default MenuManagement;

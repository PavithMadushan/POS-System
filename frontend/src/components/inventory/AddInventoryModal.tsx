import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface AddInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddInventoryModal: React.FC<AddInventoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-gray-900">Add New Inventory</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col gap-2">
             <div className="w-32 h-32 bg-gray-800 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors group">
              <ImageIcon className="text-gray-500 group-hover:text-gray-400 mb-2" size={32} />
              <span className="text-xs text-gray-500">Upload Image</span>
            </div>
            <button className="text-pink-500 text-xs font-medium w-32 text-center hover:underline">Change</button>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Name</label>
              <input type="text" placeholder="Enter inventory name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500" />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Category</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500">
                <option value="">Select Category</option>
                <option value="Chicken">Chicken</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Quantity</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500">
                <option value="01">01</option>
                <option value="10">10</option>
              </select>
            </div>

             {/* Stock Status */}
             <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Stock</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500">
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            {/* Status */}
             <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Status</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500">
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

             {/* Price */}
             <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Price</label>
              <input type="number" placeholder="Enter inventory price" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500" />
            </div>

             {/* Perishable Radio */}
             <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-3">Perishable</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="perishable" className="w-4 h-4 text-pink-500 focus:ring-pink-500 border-gray-300" />
                  <span className="text-sm text-gray-600">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="perishable" className="w-4 h-4 text-pink-500 focus:ring-pink-500 border-gray-300" />
                  <span className="text-sm text-gray-600">No</span>
                </label>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-2 flex justify-end gap-3 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="px-8 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md shadow-pink-200 transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInventoryModal;

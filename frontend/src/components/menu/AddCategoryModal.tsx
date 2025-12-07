import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Add New Category</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Icon Upload Area - Matches Figma Dark Box */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-800 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors group">
              <ImageIcon className="text-gray-500 group-hover:text-gray-400 mb-2" size={32} />
              <span className="text-xs text-gray-500">Select icon here</span>
            </div>
            <button className="text-pink-500 text-xs font-medium mt-2 hover:underline">
              Change icon
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Category Name</label>
              <input 
                type="text" 
                placeholder="Enter Category name"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Select Menu</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all">
                <option value="">Select menu</option>
                <option value="normal">Normal Menu</option>
                <option value="special">Special Deals</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1.5">Description</label>
              <textarea 
                rows={3}
                placeholder="Write your category description here"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-2 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
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

export default AddCategoryModal;

export type ProductStatus = 'Active' | 'Draft' | 'Inactive';
export type StockStatus = 'In Stock' | 'Out of Stock' | 'Low Stock';

export interface InventoryItem {
  id: string;
  name: string;
  image: string;
  stockStatus: string; // e.g., "10 In Stock"
  status: ProductStatus;
  category: string;
  retailPrice: number;
  isPerishable: boolean;
  quantity?: number;
}

export interface InventoryFilterState {
  status: 'All' | ProductStatus;
  category: string;
  stockStatus: string;
  priceRange: { min: number; max: number };
}

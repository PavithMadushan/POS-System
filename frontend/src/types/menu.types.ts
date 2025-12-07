export interface Category {
  id: string;
  name: string;
  icon: string; // In a real app, this might be an icon name or URL
  itemCount: number;
  description?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  itemId: string;
  stock: number;
  category: string;
  price: number;
  availability: 'In Stock' | 'Out of Stock';
  image: string;
}

export type MenuTab = 'Normal Menu' | 'Special Deals' | 'New Year Special' | 'Deserts and Drinks';

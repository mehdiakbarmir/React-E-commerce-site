export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  salePrice?: number;
  category: string;
  image: string;
  images?: string[];
  onSale?: boolean;
  isNew?: boolean;
  sizes?: string[];
  colors?: string[];
  rating?: number;
  reviewCount?: number;
  sku?: string;
  features?: string[];
  inStock?: boolean;
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
  color?: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen?: boolean;
  toggleCart?: () => void;
} 
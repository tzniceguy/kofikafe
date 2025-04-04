import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const useCart = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  totalAmount: 0,

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
        return {
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + item.price,
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
        totalItems: state.totalItems + 1,
        totalAmount: state.totalAmount + item.price,
      };
    }),

  removeItem: (itemId) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.id === itemId);
      if (!itemToRemove) return state;

      return {
        items: state.items.filter((item) => item.id !== itemId),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.quantity,
      };
    }),

  updateQuantity: (itemId, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.id === itemId) {
          const quantityDiff = quantity - item.quantity;
          return { ...item, quantity };
        }
        return item;
      });

      return {
        items: updatedItems,
        totalItems: state.items.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
        totalAmount: state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
      };
    }),

  clearCart: () =>
    set({
      items: [],
      totalItems: 0,
      totalAmount: 0,
    }),
}));

export default useCart;

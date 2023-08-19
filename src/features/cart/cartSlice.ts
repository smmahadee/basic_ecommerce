import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductTypes } from '~/components/types/ProductTypes';

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductTypes>) => {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
      }

      state.totalAmount += action.payload.price;
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const removedItem = state.cartItems.find(
        item => item.id === action.payload
      );
      if (removedItem) {
        if (removedItem.quantity > 1) {
          removedItem.quantity--;
        } else {
          state.cartItems = state.cartItems.filter(
            item => item.id !== action.payload
          );
          state.totalQuantity--;
        }

        state.totalAmount -= removedItem.price;
      }
    },

    removeSingleProduct: (state, action: PayloadAction<number>) => {
      const removedItem = state.cartItems.find(
        item => item.id === action.payload
      );

      if (removedItem) {
        state.totalQuantity--;
        state.totalAmount -= removedItem.price * removedItem.quantity;
        state.cartItems = state.cartItems.filter(
          item => item.id !== action.payload
        );
      }
    },

    removeAllProduct: state => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addProduct, removeProduct, removeSingleProduct , removeAllProduct} =
  cartSlice.actions;
export default cartSlice.reducer;

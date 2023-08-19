import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '~/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddlewares => getDefaultMiddlewares(),
});

export type RootState = ReturnType<typeof store.getState>;

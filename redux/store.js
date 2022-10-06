import { configureStore } from '@reduxjs/toolkit';
import { priceSlice } from './price/price-slice';

export const store = configureStore({
  reducer: {
    price: priceSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

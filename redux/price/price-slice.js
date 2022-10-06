import { createSlice } from '@reduxjs/toolkit';
import getPrice from './price-operation';

const initialState = {
  currency: [],
  time: null,
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  extraReducers: {
    [getPrice.fulfilled](state, action) {
      state.time = action.payload.data.time.updated;
      state.currency = Object.values(action.payload.data.bpi);
    },
  },
});

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const getPrice = createAsyncThunk('price/get', async () => {
  try {
    const data = await axios.get();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export default getPrice;

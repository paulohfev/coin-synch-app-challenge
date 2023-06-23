import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { CryptoCoinsService } from '@/services/cryptoCoins.service';

const initialState: any = {}

export const fetchCryptoCoinTrades = createAsyncThunk(
  'cryptoCoins/fetCryptoCoinsTrades',
  async () => await CryptoCoinsService.fetchCryptoCoinTrades()
);

export const fetchCryptoCoinTradesSlice = createSlice({
  name: 'cryptoCoinValues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoCoinTrades.fulfilled, (state, { payload }) => {
      return payload;
    });
  }
});

export const selectCryptoCoinTrades = (state: RootState) => state.cryptoCoinTrades;

export default fetchCryptoCoinTradesSlice.reducer;

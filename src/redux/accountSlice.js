import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 500,
    username: 'Jacob',
  },
  reducers: {
    deposit: {
      reducer(state, action) {
        state.balance += action.payload.value;
      },
      prepare(value) {
        return {
          payload: {
            value,
            id: Date.now(),
          },
        };
      },
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const accountReducer = accountSlice.reducer;
export const { deposit, withdraw } = accountSlice.actions;

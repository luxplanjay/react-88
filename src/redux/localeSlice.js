import { createSlice } from '@reduxjs/toolkit';

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang: {
      reducer(state, action) {
        state.lang = action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: { ga: true },
        };
      },
    },
  },
});

export const localeReducer = localeSlice.reducer;
export const { changeLang } = localeSlice.actions;

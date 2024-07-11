import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SpicesState {
  value: string[];
}

const initialState: SpicesState = {
  value: [],
};

const spicesSlice = createSlice({
  name: "spices",
  initialState,
  reducers: {
    addSpice: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeSpice: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((spice) => spice !== action.payload);
    },
    cleanSpices: (state) => {
      state.value = [];
    },
  },
});

export const { addSpice, removeSpice, cleanSpices } = spicesSlice.actions;

export default spicesSlice.reducer;

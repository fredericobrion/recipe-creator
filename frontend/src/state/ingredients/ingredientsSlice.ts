import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IngredientsState {
  value: string[];
}

const initialState: IngredientsState = {
  value: [],
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (ingredient) => ingredient !== action.payload
      );
    },
  },
});

export const { addIngredient, removeIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
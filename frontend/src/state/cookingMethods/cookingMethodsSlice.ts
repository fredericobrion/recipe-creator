import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CookingMethods } from "../../types/cookingMethods";

interface CookingMethodsState {
  value: CookingMethods[];
}

const initialState: CookingMethodsState = {
  value: [],
};

const cookingMethodsSlice = createSlice({
  name: "cookingMethods",
  initialState,
  reducers: {
    addCookingMethod: (state, action: PayloadAction<CookingMethods>) => {
      state.value = [...state.value, action.payload];
    },
    removeCookingMethod: (state, action: PayloadAction<CookingMethods>) => {
      state.value = state.value.filter(
        (cookingMethod) => cookingMethod !== action.payload
      );
    },
  },
});

export const { addCookingMethod, removeCookingMethod } = cookingMethodsSlice.actions;

export default cookingMethodsSlice.reducer;

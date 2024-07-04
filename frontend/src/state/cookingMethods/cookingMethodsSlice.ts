import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CookingMethods } from "../../types/cookingMethods";

interface CookingMethodsState {
  cookingMethods: string[];
}

const initialState: CookingMethodsState = {
  cookingMethods: [],
};

const cookingMethodsSlice = createSlice({
  name: "cookingMethods",
  initialState,
  reducers: {
    addCookingMethod: (state, action: PayloadAction<CookingMethods>) => {
      state.cookingMethods = [...state.cookingMethods, action.payload];
    },
    removeCookingMethod: (state, action: PayloadAction<CookingMethods>) => {
      state.cookingMethods = state.cookingMethods.filter(
        (cookingMethod) => cookingMethod !== action.payload
      );
    },
  },
});

export const { addCookingMethod, removeCookingMethod } = cookingMethodsSlice.actions;

export default cookingMethodsSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RecipeState {
  value: string;
}

const initialState: RecipeState = {
  value: "",
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
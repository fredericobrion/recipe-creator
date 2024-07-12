import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FavoriteRecipesState {
  value: string[];
}

const initialState: FavoriteRecipesState = {
  value: [],
};

const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState,
  reducers: {
    addFavoriteRecipe: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeFavoriteRecipe: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((recipe) => recipe !== action.payload);
    },
    cleanFavoriteRecipes: (state) => {
      state.value = [];
    },
  },
});

export const { addFavoriteRecipe, removeFavoriteRecipe, cleanFavoriteRecipes } =
  favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;

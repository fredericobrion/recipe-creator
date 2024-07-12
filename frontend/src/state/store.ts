import { configureStore } from "@reduxjs/toolkit";
import cookingMethodsReducer from "./cookingMethods/cookingMethodsSlice";
import ingredientsReducer from "./ingredients/ingredientsSlice";
import spicesReducer from "./spices/spicesSlice";
import peopleReducer from "./people/peopleSlice";
import recipeReducer from "./recipe/recipeSlice";
import errorReducer from "./error/errorSlice";
import loadingReducer from "./loading/loadingSlice";
import themeReducer from "./theme/themSlice";
import favoritesRecipesReducer from "./favoriteRecipes/favoriteRecipesSlice";

export const store = configureStore({
  reducer: {
    cookingMethods: cookingMethodsReducer,
    ingredients: ingredientsReducer,
    spices: spicesReducer,
    people: peopleReducer,
    recipe: recipeReducer,
    error: errorReducer,
    loading: loadingReducer,
    theme: themeReducer,
    favoritesRecipes: favoritesRecipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

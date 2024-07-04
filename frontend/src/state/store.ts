import { configureStore } from "@reduxjs/toolkit";
import cookingMethodsReducer from './cookingMethods/cookingMethodsSlice';
import ingredientsReducer from './ingredients/ingredientsSlice';

export const store = configureStore({
  reducer: {
    cookingMethods: cookingMethodsReducer,
    ingredients: ingredientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
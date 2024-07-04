import { configureStore } from "@reduxjs/toolkit";
import cookingMethodsReducer from './cookingMethods/cookingMethodsSlice';
import ingredientsReducer from './ingredients/ingredientsSlice';
import spicesReducer from './spices/spicesSlice';
import peopleReducer from './people/peopleSlice';

export const store = configureStore({
  reducer: {
    cookingMethods: cookingMethodsReducer,
    ingredients: ingredientsReducer,
    spices: spicesReducer,
    people: peopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
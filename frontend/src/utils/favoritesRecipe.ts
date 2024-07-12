const LOCAL_STORAGE_KEY = 'favoritesRecipe';

export const getFavoritesRecipe = (): string[] => {
  const favoritesRecipe = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (favoritesRecipe) {
    return JSON.parse(favoritesRecipe);
  }

  return [];
};

export const addFavoritesRecipe = (favoriteRecipe: string): void => {
  const recipes = getFavoritesRecipe();

  recipes.push(favoriteRecipe)

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
};

export const removeFavoriteRecipe = (recipe: string): void => {
  const recipes = getFavoritesRecipe();

  const newRecipes = recipes.filter((r) => r !== recipe);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes));
}
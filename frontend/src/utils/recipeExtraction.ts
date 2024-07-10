export const extractRecipeName = (recipe: string): string => {
  const parts = recipe.split("**");
  return parts[1];
};

export const extractIngredients = (recipe: string): string[] => {
  const parts = recipe.split("**");

  const ingredientsSection = parts[4];

  const regex = /~([^\n]*)/g;
  const ingredientes = [];
  let match;

  while ((match = regex.exec(ingredientsSection)) !== null) {
    ingredientes.push(match[1].trim());
  }

  return ingredientes;
};

export const extractInstructions = (recipe: string): string[] => {
  const parts = recipe.split("**");

  const instructionsSection = parts[6];

  const regex = /~([^\n]*)/g;
  const instructions = [];
  let match;

  while ((match = regex.exec(instructionsSection)) !== null) {
    instructions.push(match[1].trim());
  }

  return instructions;
};

export const extractNutritionalInfo = (recipe: string): string[][] => {
  const parts = recipe.split("**");

  const nutritionalInfoSection = parts[8];

  const regex = /~([^\n]*)/g;

  const nutritionalInfo = [];

  let match;

  while ((match = regex.exec(nutritionalInfoSection)) !== null) {
    const [chave, valor] = match[1].split(':').map(str => str.trim());
    nutritionalInfo.push([chave, valor]);
  }

  return nutritionalInfo;
};


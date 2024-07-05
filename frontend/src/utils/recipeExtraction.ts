export const extractRecipeName = (recipe: string): string => {
  const parts = recipe.split("**");
  return parts[1];
};

export const extractIngredients = (recipe: string): string[] => {
  const parts = recipe.split("**");

  const ingredientsSection = parts[4];

  const regex = /- ([^\n\r-]+)/g;
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

  const regex = /- ([^\n\r-]+)/g;
  const instructions = [];
  let match;

  while ((match = regex.exec(instructionsSection)) !== null) {
    instructions.push(match[1].trim());
  }

  return instructions;
};

export const extractNutritionalInfo = (recipe: string): [string, string][] => {
  const parts = recipe.split("**");

  const nutritionalInfoSection = parts[parts.length - 1];

  const nutritionalInfo = nutritionalInfoSection
    .split('-')
    .map(info => info.trim())
    .filter(info => info.length > 0 && info.includes(':'))
    .map(info => {
      const [name, value] = info.split(':').map(part => part.trim());
      return [name, value] as [string, string];
    });

  return nutritionalInfo;
};


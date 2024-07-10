import { Request, Response, Router } from 'express';
import RecipeController from '../controller/recipe';
import validateRecipeBody from '../middlewares/validateRecipeBody';

const router = Router();

const recipeController = new RecipeController();

router.post('/', validateRecipeBody, (req: Request, res: Response) => {
  return recipeController.generateRecipe(req, res);
});

export default router;

import { Request, Response, Router } from 'express';
import RecipeController from '../controller/recipe';

const router = Router();

const recipeController = new RecipeController();

router.post('/', (req: Request, res: Response) => {
  return recipeController.generateRecipe(req, res);
});

export default router;

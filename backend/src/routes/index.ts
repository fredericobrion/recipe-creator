import { Router } from "express";
import recipeRouter from './recipe.routes';

const router = Router();

router.use('/recipe', recipeRouter);

export default router;

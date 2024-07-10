import { Request, Response, NextFunction } from "express";
import recipeSchema from "../validations/recipe";

const validateRecipeBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = recipeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

export default validateRecipeBody;

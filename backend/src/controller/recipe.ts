import RecipeService from "../service/recipe";
import { Request, Response } from "express";
import mapStatusHTTP from "../utils/mapStatusHTTP";

export default class RecipeController {
  constructor(private recipeService = new RecipeService()) {}

  async generateRecipe(req: Request, res: Response) {
    const equipments = req.body.equipments;
    const ingredients = req.body.ingredients;
    const spices = req.body.spices;

    const response = await this.recipeService.generateRecipe(equipments, ingredients, spices);

    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }
}
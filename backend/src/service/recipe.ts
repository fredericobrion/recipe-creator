// import OpenAI from "openai";
import { ServiceResponse } from "../types/serviceResponse";
import { GoogleGenerativeAI } from "@google/generative-ai";
import formatStringArray from "../utils/formatStringArray";

export default class RecipeService {
  async generateRecipe(equipments: string[], ingredients: string[], spices: string[]): Promise<ServiceResponse<string>> {
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const genAi = new GoogleGenerativeAI(process.env.API_KEY!);
    const instruction =
      "Irei te passar os equipamentos que possuo disponíveis e os ingredientes e temperos que possuo. Você irá me sugerir uma receita baseado no que te passar. Estruture sua resposta para que a receita seja fácil de seguir. Não precisa utilizar todos os ingredientes, temperos e equipamentos que possuo. Se possível, me passe a quantidade de cada ingrediente e tempero que devo utilizar. Vamos lá!";
    const equipmentsPrompt = `Equipamentos disponíveis: ${formatStringArray(equipments)}`;
    const ingredientsPrompt = `Ingredientes disponíveis: ${formatStringArray(ingredients)}`;
    const spicesPrompt = `Temperos disponíveis: ${formatStringArray(spices)}`;

    const prompt = `${instruction}\n\n${equipmentsPrompt}\n\n${ingredientsPrompt}\n\n${spicesPrompt}`;

    const model = genAi.getGenerativeModel({model: 'gemini-pro'});

    // const response = await openai.completions.create({
    //   model: "davinci-002",
    //   prompt: prompt,
    // })

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();


    return { status: "SUCCESSFUL", data: { message: text } };
  }
}

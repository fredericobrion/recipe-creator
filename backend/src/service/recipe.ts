// import OpenAI from "openai";
import { ServiceResponse } from "../types/serviceResponse";
import { GoogleGenerativeAI } from "@google/generative-ai";
import formatStringArray from "../utils/formatStringArray";

export default class RecipeService {
  async generateRecipe(
    people: number,
    cookingMethods: string[],
    ingredients: string[],
    spices: string[]
  ): Promise<ServiceResponse<string>> {
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const genAi = new GoogleGenerativeAI(process.env.API_KEY!);
    const instruction = `Irei te passar os equipamentos que possuo disponíveis e os ingredientes e temperos que possuo. Você irá me sugerir uma receita baseado no que te passar para ${people} ${
      people > 1 ? "pessoas" : "pessoa"
    }. Não precisa utilizar todos os ingredientes, temperos e equipamentos que possuo. Me passe a quantidade de cada ingrediente e tempero que devo utilizar.`;
    const responseStructure = 'A sua resposta deverá ser dividida em 4 partes: nome da receita (somente o nome, não coloque nome da receita antes), ingredientes (coloque um - na frente de cada 1 e coloque os temperos misturados aqui), instruções (envie as instruções em ordem com um - na frente. Se for se referir a um intervalo de tempo, utilize o formato com a no meio ao invés de -. Exemplo: 2 a 3 minutos ao invés de 2 - 3 minutos) e informações nutricionais aproximadas. Antes e ao final de cada seção utilize **';
    const equipmentsPrompt = `Equipamentos disponíveis: ${formatStringArray(
      cookingMethods
    )}`;
    const ingredientsPrompt = `Ingredientes disponíveis: ${formatStringArray(
      ingredients
    )}`;
    const spicesPrompt = `Temperos disponíveis: ${formatStringArray(spices)}`;

    const prompt = `${instruction}\n\n${responseStructure}\n\n${equipmentsPrompt}\n\n${ingredientsPrompt}\n\n${spicesPrompt}`;

    const model = genAi.getGenerativeModel({ model: "gemini-pro" });

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

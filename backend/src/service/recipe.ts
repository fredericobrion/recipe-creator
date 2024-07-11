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
    const genAi = new GoogleGenerativeAI(process.env.API_KEY!);

    const instruction = `Irei te passar os equipamentos que possuo disponíveis e os ingredientes e temperos que possuo. Você irá me sugerir uma receita baseado no que te passar para ${people} ${
      people > 1 ? "pessoas" : "pessoa"
    }. Não precisa utilizar todos os ingredientes, temperos e equipamentos que possuo. Me passe a quantidade de cada ingrediente e tempero que devo utilizar.`;
    const responseStructure =
      "A sua resposta deverá ser dividida em 4 partes: nome da receita, ingredientes (coloque um ~ na frente de cada 1 e coloque os temperos misturados aqui), instruções (envie as instruções em ordem com um ~ na frente.) e informações nutricionais aproximadas. Antes e ao final de cada seção utilize **";
    const responseExample =
      "Siga o exemplo para uma receita de frango assado com batata: \n**Frango Assado com Batata**\n**Ingredientes**\n~1kg de frango\n~1kg de batata\n~sal\n~pimenta\n~alecrim\n**Instruções**\n~Pré-aqueça o forno a 180 graus\n~Tempere o frango com sal, pimenta e alecrim\n~Corte as batatas em rodelas e tempere com sal\n~Coloque o frango e as batatas em uma assadeira e leve ao forno por 1 hora\n**Informações Nutricionais Aproximadas**\n~Calorias: 500\n~Proteínas: 50g\n~Carboidratos: 30g\n~Gorduras: 20g\n";
    const equipmentsPrompt = `Os equipamentos disponíveis são: ${formatStringArray(
      cookingMethods
    )}`;
    const ingredientsPrompt = `Ingredientes disponíveis: ${formatStringArray(
      ingredients
    )}`;
    const spicesPrompt = `Temperos disponíveis: ${formatStringArray(spices)}`;

    const prompt = `${instruction}\n\n${responseStructure}\n\n${responseExample}\n\n${equipmentsPrompt}\n\n${ingredientsPrompt}\n\n${spicesPrompt}`;

    const model = genAi.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    // if (result.status == 400) {
    //   return { status: "BAD REQUEST", data: { message: result.errorDetails[0].reason } };
    // }
    const response = await result.response;
    const text = response.text();

    return { status: "SUCCESSFUL", data: { message: text } };
  }
}

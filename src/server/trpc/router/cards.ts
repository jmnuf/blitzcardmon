import { readFile } from "fs/promises";
import { env } from "process";
import { z } from "zod";

import { publicProcedure, router } from "../trpc";

interface LanguageCard {
	learn:string;
	pronounce:string;
	alternatives:string[];
	means:Record<string, string[]>;
}

const readData = async () => {
	const baseURL = env.VERCEL_URL ? env.VERCEL_URL : "localhost:3000";
	if (env.NODE_ENV == "development" || baseURL == "localhost:3000") {
		const rawData = await readFile("./public/data/cards.json", { encoding: "utf-8" });
		const data = JSON.parse(rawData) as Record<string, LanguageCard[]>;
		return data;
	}
	const rawData = await (await fetch(baseURL + "/data/cards.json")).text();
	const data = JSON.parse(rawData) as Record<string, LanguageCard[]>;
	return data;
};

export const cardsRouter = router({
	languages: publicProcedure
		.input(z.object({}).optional())
		.query(async () => {
			const data = await readData();
			return Object.keys(data);
		}),
	langCards: publicProcedure
		.input(z.object({ language: z.string() }))
		.query(async ({ input }) => {
			const data = await readData();
			const cards = data[input.language];
			if (!cards) {
				throw new Error("Didn't find language");
			}
			const count = cards.length
			return { cards, count, lang: input.language };
		}),
});




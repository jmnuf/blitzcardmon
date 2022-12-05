import { z } from "zod";
import type { Language, Languages } from "../../data/cards";
import cards from "../../data/cards";

import { publicProcedure, router } from "../trpc";

const readLang = async (langName: Languages) => {
	const language = cards[langName];
	return { language, name: langName };
};

const hasLang = (lang: string): lang is Languages => {
	return Object.keys(cards).includes(lang);
};

export const cardsRouter = router({
	languages: publicProcedure.input(z.object({}).optional()).query(async () => {
		return Object.keys(cards) as Languages[];
	}),
	langCards: publicProcedure
		.input(z.object({ language: z.string() }))
		.query(async ({ input }) => {
			if (!hasLang(input.language)) {
				throw new Error(`Language "${input.language}" not supported`);
			}
			const data = await readLang(input.language);
			if (data.language) {
				const lang = data.language;
				const count = data.language.cards.length;
				return { lang, cardsCount: count };
			}
			throw new Error("Unexpected error while attempting to get language");
		}),
});

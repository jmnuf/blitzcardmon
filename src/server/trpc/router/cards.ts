import { z } from "zod";
import type { Languages } from "../../data/cards";
import cards from "../../data/cards";

import { publicProcedure, router } from "../trpc";

const readData = async (lang?: Languages) => {
	if (lang) {
		return { cards: cards[lang] ?? [], lang };
	}
	return { cards };
};

const hasLang = (lang: string): lang is Languages => {
	return Object.keys(cards).includes(lang);
};

export const cardsRouter = router({
	languages: publicProcedure.input(z.object({}).optional()).query(async () => {
		const data = await readData();
		return Object.keys(data.cards) as Languages[];
	}),
	langCards: publicProcedure
		.input(z.object({ language: z.string() }))
		.query(async ({ input }) => {
			if (!hasLang(input.language)) {
				throw new Error(`Language "${input.language}" not supported`);
			}
			const data = await readData(input.language);
			if (data.lang) {
				const count = data.cards.length;
				return { ...data, count };
			}
			throw new Error("Unexpected error while attempting to get language");
		}),
});

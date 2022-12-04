import mandarinCards from "./mandarin-cards";

export type LanguageCard = {
	learn: string;
	pronounce: string;
	alternatives: string[];
	means: Record<string, string[]>;
};

const cards = {
	mandarin: mandarinCards,
} as const;

export type Languages = keyof typeof cards;

export default cards;

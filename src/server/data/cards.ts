import mandarin from "./mandarin-cards";

export type LanguageCard = {
	learn: string;
	pronounce: string;
	alternatives: string[];
	means: Record<string, string[]>;
	extra?: Record<string, string>;
};

export type LanguageConfig = {
	accentName?: string;
	extrasFront?: string[];
	extrasBacks?: string[];
};

export type Language = {
	cards: LanguageCard[];
	config: LanguageConfig;
};

const cards = {
	mandarin,
} as const;

export type Languages = keyof typeof cards;

export default cards;

export type LanguageCard = {
	learn: string;
	pronounce: string;
	alternatives: string[];
	means: Record<string, string[]>;
};

const cards = {
	mandarin: [
		{
			learn: "爱",
			alternatives: ["愛"],
			pronounce: "ài",
			means: {
				en: ["to love", "affection", "to be fond of", "to like"],
			},
		},
		{
			learn: "八",
			alternatives: [],
			pronounce: "bā",
			means: {
				en: ["eight", "8"],
			},
		},
		{
			learn: "爸爸",
			alternatives: [],
			pronounce: "bà ba",
			means: {
				en: ["father (informal)", "CL:个[gè],位[wèi]"],
			},
		},
		{
			learn: "杯子",
			alternatives: [],
			pronounce: "Bēizi",
			means: {
				en: ["cup", "glass", "CL:个[gè],支[zhī]"],
			},
		},
		{
			learn: "北京",
			alternatives: [],
			pronounce: "Běijīng",
			means: {
				en: [
					"Beijing",
					"capital of People's Republic of China",
					"Peking",
					"PRC government",
				],
			},
		},
		{
			learn: "本",
			alternatives: [],
			pronounce: "Běn",
			means: {
				en: [
					"origin",
					"source",
					"roots or stems of plants",
					"this",
					"the current",
					"root",
					"foundation",
					"basis",
					"classifier for books, periodicals, files etc",
					"originally",
				],
			},
		},
		{
			learn: "不客气",
			alternatives: ["不客氣"],
			pronounce: "Bù kèqì",
			means: {
				en: [
					"you're welcome",
					"it's my pleasure (answer to someone who thanks)",
				],
			},
		},
	] as LanguageCard[],
} as const;

export type Languages = keyof typeof cards;

export default cards;

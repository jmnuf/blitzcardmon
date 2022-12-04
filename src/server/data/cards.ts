
export interface LanguageCard {
	learn:string;
	pronounce:string;
	alternatives:string[];
	means:Record<string, string[]>;
}

const cards = {
	"mandarin": [
		{
			"learn": "爱",
			"alternatives": [
				"愛"
			],
			"pronounce": "ài",
			"means": {
				"en": [
					"to love",
					"affection",
					"to be fond of",
					"to like"
				]
			}
		}
	] as LanguageCard[]
} as const;

export type Languages = keyof typeof cards;

export default cards;



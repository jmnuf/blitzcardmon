import type { Language, LanguageCard, LanguageConfig } from "./cards";

const config: LanguageConfig = {
	accentName: "Pinyin",
};

const cards: LanguageCard[] = [
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
			en: ["you're welcome", "it's my pleasure (answer to someone who thanks)"],
		},
	},
	{
		learn: "不",
		alternatives: [],
		pronounce: "bù",
		means: {
			en: ["not (negative preﬁx)", "no"],
		},
	},
	{
		learn: "菜",
		alternatives: [],
		pronounce: "cài",
		means: {
			en: [
				"dish (type of food)",
				"vegetables",
				"vegetable",
				"cuisine",
				"CL:盘[pán], 道[dào]",
			],
		},
	},
	{
		learn: "茶",
		alternatives: [],
		pronounce: "chá",
		means: {
			en: ["tea", "tea plant", "CL:杯[bēi], 壶[hú]"],
		},
	},
	{
		learn: "吃",
		alternatives: [],
		pronounce: "chī",
		means: {
			en: [
				"to eat",
				"to have one's meal",
				"to eradicate",
				"to destroy",
				"to absorb",
				"to suﬀer",
				"to exhaust",
			],
		},
	},
	{
		learn: "出租车",
		alternatives: ["出租車"],
		pronounce: "chū zū chē",
		means: {
			en: ["taxi"],
		},
	},
];

const mandarin: Language = {
	cards,
	config,
};

export default mandarin;

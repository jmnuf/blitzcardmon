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
	{
		learn: "打电话",
		alternatives: ["打電話"],
		pronounce: "dǎ diàn huà",
		means: {
			en: ["to make a phone call"],
		},
	},
	{
		learn: "大",
		alternatives: [],
		pronounce: "dà",
		means: {
			en: [
				"big",
				"huge",
				"large",
				"major",
				"great",
				"wide",
				"deep",
				"oldest",
				"eldest",
			],
		},
	},
	{
		learn: "的",
		alternatives: [],
		pronounce: "de",
		means: {
			en: [
				"of",
				"structural particle: used before a noun, linking it to preceding possessive or descriptive attributive",
			],
		},
	},
	{
		learn: "点",
		alternatives: ["點"],
		pronounce: "diǎn",
		means: {
			en: [
				"a little",
				"a bit",
				"drop (of liquid)",
				"stain",
				"spot",
				"speck",
				"jot",
				"dot stroke (in Chinese characters)",
				"decimal point",
				"point",
				"mark (of degree or level)",
				"a place (with certain characteristics)",
				"iron bell",
				"o'clock",
				"some",
				"(point) unit of measurement for type",
				"to touch on brieﬂy",
				"to make clear",
				"to light",
				"to ignite",
				"to kindle",
				"period of time at night (24 minutes) (old)",
				"a drip",
				"to dibble",
				"classiﬁer for small indeterminate quantities",
			],
		},
	},
	{
		learn: "电脑",
		alternatives: ["電腦"],
		pronounce: "diàn nǎo",
		means: {
			en: ["computer", "CL:台[tái]"],
		},
	},
	{
		learn: "电视",
		alternatives: ["電視"],
		pronounce: "diàn shì",
		means: {
			en: ["Television", "TV", "CL:台[tái], 个[gè]"],
		},
	},
	{
		learn: "电影",
		alternatives: ["電影"],
		pronounce: "diàn yǐng",
		means: {
			en: ["movie", "film", "CL:部[bù], 幕[mù], 场[chǎng]"],
		},
	},
	{
		learn: "东西",
		alternatives: ["東西"],
		pronounce: "dōng xi",
		means: {
			en: ["thing", "stuff", "person", "CL:个[gè], 件[jiàn]"],
		},
	},
	{
		learn: "都",
		alternatives: [],
		pronounce: "dōu",
		means: {
			en: ["all, both", "entirely (due to) each", "even", "already"],
		},
	},
	{
		learn: "读",
		alternatives: ["讀"],
		pronounce: "dú",
		means: {
			en: [
				"to read",
				"to study",
				"reading of word (i.e. pronunciation), similar to 拼音[pīn yīn]",
			],
		},
	},
	{
		learn: "对不起",
		alternatives: ["對不起"],
		pronounce: "duì bu qǐ",
		means: {
			en: [
				"I'm sorry",
				"excuse me",
				"pardon me",
				"if you please",
				"sorry? (please repeat)",
				"unworthy",
				"to let down",
			],
		},
	},
	{
		learn: "多",
		alternatives: [],
		pronounce: "duō",
		means: {
			en: ["many", "much", "a lot of", "numerous", "multi-"],
		},
	},
];

const mandarin: Language = {
	cards,
	config,
};

export default mandarin;

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Card from "../../components/card";
import type { LanguageCard } from "../../server/data/cards";
import { trpc } from "../../utils/trpc";

const LangCards: NextPage = () => {
	const router = useRouter();
	const lang = router.query.lang;
	if (typeof lang !== "string") {
		return (
			<>
				<Head>
					<title>Blitzcardmon</title>
					<meta name="description" content="Invalid language query" />
				</Head>
				<main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-violet-900 p-4">
					<div className="container mx-auto flex flex-col items-center justify-center text-purple-400">
						<p>Unexpected request</p>
					</div>
				</main>
			</>
		);
	}
	const cards = trpc.cards.langCards.useQuery({ language: lang });

	return (
		<>
			<Head>
				<title>Blitzcardmon</title>
				<meta name="description" content={`Blitznom's ${lang} cards`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-violet-900 p-4">
				<div className="container mx-auto flex flex-col items-center justify-center text-purple-400">
					<h1 className="text-center text-5xl font-extrabold leading-normal text-purple-300 md:text-[5rem]">
						{lang.substring(0, 1).toUpperCase().concat(lang.substring(1))} Cards
					</h1>
					<div className="mt-3 flex flex-col"></div>
					<div className="flex w-full flex-col items-center justify-center py-6 text-2xl">
						<p>
							{cards.isError
								? `Failed to get cards for language ${lang}. Possibly unsupported`
								: cards.data
								? `Got ${cards.data.count} ${lang} cards`
								: "Loading cards..."}
						</p>
						{cards.data ? <RenderCards cards={cards.data.cards} /> : undefined}
					</div>
				</div>
			</main>
		</>
	);
};

export default LangCards;

const RenderCards: React.FC<{ cards: LanguageCard[] }> = ({ cards }) => {
	return (
		<div className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-3">
			{cards.map((c, i) => {
				if (!c.means.en) return undefined;
				const SubTitle = (str: string) => <h3 className="text-2xl">{str}</h3>;
				const content: (string | JSX.Element)[] = [c.learn];
				if (c.alternatives.length > 0) {
					content.push(SubTitle("Variations"));
					content.push(c.alternatives.join(" / "));
				}
				content.push(SubTitle("Accentuation"));
				content.push(c.pronounce);
				content.push(SubTitle("Means"));
				if (c.means.en.length > 1) {
					content.push(c.means.en.join(" / "));
				} else if (c.means.en.length == 1) {
					content.push(c.means.en[0] as string);
				} else {
					content.push(<span className="text-red-600">No meanings set</span>);
				}
				return <Card key={i} title={c.learn} contents={content} />;
			})}
		</div>
	);
};

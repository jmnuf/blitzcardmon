import type {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../components/card";
import type { Language } from "../../server/data/cards";
import { trpc } from "../../utils/trpc";

const LangCards: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ language }) => {
	const router = useRouter();
	const lang =
		typeof router.query.lang !== "string" && language
			? language
			: router.query.lang;
	if (typeof lang !== "string") {
		return (
			<>
				<Head>
					<title>Blitzcardmon</title>
					<meta name="description" content="Blitznom's language cards" />
				</Head>
				<main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-violet-900 p-4">
					<div className="container mx-auto flex flex-col items-center justify-center text-purple-400">
						<p>Unexpected request</p>
					</div>
				</main>
			</>
		);
	}
	const query = trpc.cards.langCards.useQuery({ language: lang });

	return (
		<>
			<Head>
				<title>Blitzcardmon</title>
				<meta name="description" content={`Blitznom's ${lang} cards`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-violet-900 p-4">
				<div className="container mx-auto flex flex-col items-center justify-center text-purple-400">
					<Link
						className="rounded-md py-1 px-2 text-violet-400 outline outline-2 outline-slate-600 transition-colors hover:bg-purple-300 hover:text-violet-900"
						href={"/"}
					>
						Home
					</Link>
					<h1 className="text-center text-5xl font-extrabold leading-normal text-purple-300 md:text-[5rem]">
						{lang.substring(0, 1).toUpperCase().concat(lang.substring(1))} Cards
					</h1>
					<div className="mt-3 flex flex-col"></div>
					<div className="flex w-full flex-col items-center justify-center py-6 text-2xl">
						<p>
							{query.isError
								? `Failed to get cards for language ${lang}. Possibly unsupported`
								: query.data
								? `Got ${query.data.cardsCount} ${lang} cards`
								: "Loading cards..."}
						</p>
						{query.data ? (
							<RenderCards languageData={query.data.lang} />
						) : undefined}
					</div>
				</div>
			</main>
		</>
	);
};

export default LangCards;

const RenderCards: React.FC<{ languageData: Language }> = ({
	languageData,
}) => {
	const { cards, config } = languageData;
	return (
		<div className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-3">
			{cards.map((c, i) => {
				if (!c.means.en) return undefined;
				const SubTitle = (str: string, title?: string) => (
					<h3 className="text-2xl" title={title}>
						{str}
					</h3>
				);
				const content: (string | JSX.Element)[] = [];
				content.push(SubTitle("Writings"));
				if (c.alternatives.length > 0) {
					const writings = [c.learn].concat(c.alternatives);
					content.push(writings.join(" / "));
				} else {
					content.push(c.learn);
				}
				if (config.accentName) {
					content.push(SubTitle(config.accentName, "Accent"));
				} else {
					content.push(SubTitle("Accent"));
				}
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

export const getServerSideProps: GetServerSideProps<{
	language: string | null;
}> = async (ctx) => {
	let lang = null;
	if (ctx.params) {
		if (typeof ctx.params.lang === "string") {
			lang = ctx.params.lang;
		} else if (typeof ctx.params.lang == "object") {
			lang = ctx.params.lang[0] as string;
		}
	}
	return {
		props: {
			language: lang,
		},
	};
};

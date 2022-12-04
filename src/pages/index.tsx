import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { createContextInner } from "../server/trpc/context";
import { cardsRouter } from "../server/trpc/router/cards";
import { trpc } from "../utils/trpc";

const NAMES = ["Blitzcardmon", "Blitznom", "Blitzcard", "Blitzmon"] as const;

const Home: NextPage = () => {
	const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
	const languages = trpc.cards.languages.useQuery();
	const [nameIndex, setNameIndex] = useState(0);
	setTimeout(() => {
		setNameIndex((nameIndex + 1) % NAMES.length);
	}, 5_000);
	const [langIndex, setLangIndex] = useState(0);
	const cardLanguages = languages.data;

	console.log(cardLanguages);
	console.log({
		isError: languages.isError,
		isLoading: languages.isLoading,
	});

	const name = NAMES[nameIndex];
	const lang = cardLanguages
		? cardLanguages[langIndex] ?? "mandarin"
		: "mandarin";
	const cards = trpc.cards.langCards.useQuery({ language: lang });
	if (cardLanguages && cardLanguages.length > 1) {
		setTimeout(() => {
			setLangIndex((langIndex + 1) % cardLanguages.length);
		}, 20_000);
	}

	return (
		<>
			<Head>
				<title>Blitzcardmon</title>
				<meta
					name="description"
					content="Card learner created with create-t3-app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-violet-900 p-4">
				<div className="contatiner mx-auto flex flex-col items-center justify-center text-purple-400">
					<h1 className="text-center text-5xl font-extrabold leading-normal text-purple-300 md:text-[5rem]">
						{name}?
					</h1>
					<p className="text-2xl">App made with create-t3-app</p>
					<div className="mt-3 flex flex-col"></div>
					<div className="flex w-full flex-col items-center justify-center pt-6 text-2xl">
						{hello.data ? (
							<p>{hello.data.greeting}</p>
						) : (
							<p>Loading salute..</p>
						)}
						{cards.data ? (
							<p>
								Cards found for {`"${lang}"`}: {cards.data.count}
							</p>
						) : (
							<p>Loading {`"${lang}"`} cards count...</p>
						)}
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const ssg = createProxySSGHelpers({
		ctx: await createContextInner({}),
		router: cardsRouter,
	});
	await ssg.languages.prefetch();

	return {
		props: {
			trpcState: ssg.dehydrate(),
		},
	};
};

import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
	title: string;
	contents: string | (string | JSX.Element)[];
};

const Card: React.FC<CardProps> = ({ title, contents }) => {
	return (
		<div className="max-w-sm rounded-lg bg-violet-500 p-6 text-center shadow-lg transition-all hover:border-4 hover:border-white md:hover:scale-105 md:hover:border-2">
			<h5 className="mb-2 border-b border-neutral-700 text-4xl font-semibold leading-tight text-purple-100">
				{title}
			</h5>
			<p className="mb-4 text-base text-violet-200">
				{typeof contents === "string"
					? contents.split("\n").map((str, i) => <p key={i}>{str}</p>)
					: contents.map((v, i) =>
							typeof v === "string" ? <p key={i}>{v}</p> : v
					  )}
			</p>
		</div>
	);
};

export default Card;

type ImageCardProps = CardProps & {
	image: {
		src: string;
		width: number;
		height: number;
		alt: string;
		href?: string;
	};
};

export const ImageCard: React.FC<ImageCardProps> = ({
	title,
	contents,
	image,
}) => {
	const img = (
		<Image
			className="rounded-t-lg"
			src={image.src}
			width={image.width}
			height={image.height}
			alt={image.alt}
		/>
	);
	return (
		<div className="flex justify-center">
			<div className="max-w-sm rounded-lg bg-violet-500 shadow-lg">
				{image.href ? <Link href={image.href}>{img}</Link> : img}
				<div className="p-6">
					<h5 className="mb-2 text-xl font-medium leading-tight text-purple-900">
						{title}
					</h5>
					<p className="mb-4 text-base text-violet-900">{contents}</p>
				</div>
			</div>
		</div>
	);
};

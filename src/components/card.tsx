import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
	title: string;
	contents: string|(string|JSX.Element)[];
};

const Card: React.FC<CardProps> = ({ title, contents }) => {

	return (
		<div className="p-6 rounded-lg shadow-lg text-center bg-violet-500 max-w-sm hover:scale-105 hover:border hover:border-white transition-all">
			<h5 className="text-purple-100 text-4xl border-b border-neutral-700 leading-tight font-semibold mb-2">{title}</h5>
			<p className="text-violet-200 text-base mb-4">
				{
					typeof contents === "string"
					? contents.split("\n").map((str, i) => <p key={i}>{str}</p>)
					: contents.map((v, i) => (typeof v === "string"? <p key={i}>{v}</p> : v))
				}
			</p>
		</div>
	);
};

export default Card;


type ImageCardProps = CardProps & { image: { src: string; width: number; height: number; alt: string; href?: string; } };

export const ImageCard: React.FC<ImageCardProps> = ({ title, contents, image }) => {
	const img = <Image className="rounded-t-lg" src={image.src} width={image.width} height={image.height} alt={image.alt} />;
	return (
		<div className="flex justify-center">
			<div className="rounded-lg shadow-lg bg-violet-500 max-w-sm">
				{
					image.href ? (<Link href={image.href}>{img}</Link>) : img
				}
				<div className="p-6">
					<h5 className="text-purple-900 text-xl leading-tight font-medium mb-2">{title}</h5>
					<p className="text-violet-900 text-base mb-4">{contents}</p>
				</div>
			</div>
		</div>
	);
};


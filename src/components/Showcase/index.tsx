import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Anime, SelectedType } from "../../services/anime";
import { Topic } from "./style";

export default function ShowCase({ items }: { items: Anime[] }) {
	const navigate = useNavigate();
	const [show, setShow] = useState<boolean>(false);
	const [selected, setSelected] = useState<Anime>({
		coverImage: { large: "" },
		id: 0,
		title: { english: "", romaji: "" },
		description: "",
		idMal: 0,
		bannerImage: "",
		genres: [""],
		status: "",
		episodes: 0,
	}) as SelectedType;

	return (
		<>
			<Topic>
				{items.map((el, i) => (
					<div key={i}>
						<h2>{el.title.english ? el.title.english : el.title.romaji}</h2>
						<img
							src={el.coverImage.large}
							onClick={() =>
								navigate(
									`/itempage/${
										el.title.english ? el.title.english : el.title.romaji
									}`,
									{
										state: {
											coverImage: el.coverImage,
											id: el.id,
											title: el.title,
											description: el.description,
											idMal: el.idMal,
											bannerImage: el.bannerImage,
											genres: el.genres,
											status: el.status,
											episodes: el.episodes,
										},
									},
								)
							}
							alt={el.title.romaji}
						/>
					</div>
				))}
			</Topic>
		</>
	);
}

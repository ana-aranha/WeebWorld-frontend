import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageStyle, Head, HeadIcon } from "../Homepage/style";
import { getAnimeSearch, Anime, AnimeSearch } from "../../services/anime";
import { BiSearchAlt } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import ShowCase from "../../components/Showcase";
import { Form } from "./style";

export default function SearchPage() {
	const [item, setItem] = useState<AnimeSearch>({ title: "" });
	const [result, setResult] = useState<Anime[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		getAnimeSearch(item.title)
			.then((resp) => {
				const response = resp.data;
				setResult(response.data.Page.media);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item.title]);

	async function searchAnime(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	return (
		<>
			<PageStyle>
				<Head>
					<HeadIcon>
						<GiReturnArrow onClick={() => navigate("/")} />
					</HeadIcon>
					<Form onSubmit={searchAnime}>
						<input
							type="text"
							placeholder="Ache seu anime.."
							value={item.title}
							onChange={(e) => {
								const aux = { ...item };
								aux.title = e.target.value;
								setItem(aux);
							}}
						/>
					</Form>
				</Head>
				<ShowCase items={result} />
			</PageStyle>
		</>
	);
}

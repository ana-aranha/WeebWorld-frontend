import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageStyle, Head, HeadIcon } from "./style";
import { BiSearchAlt } from "react-icons/bi";
import HighlightsCarousel from "../../components/Carousel";
import ShowCase from "../../components/Showcase";
import { getAnime, Anime } from "../../services/anime";
import Dashboard from "../../components/Dashboard";

export default function HomePage() {
	const [items, setItems] = useState<Anime[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		getAnime()
			.then((resp) => {
				const response = resp.data;
				setItems(response.data.Page.media);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<PageStyle>
				<Head>
					<iframe
						src="https://giphy.com/embed/61ui2gFu0gvd09gE5i"
						width="55"
						height="100"
						allowFullScreen
					></iframe>
					<h1>Hello there, my beautiful weebs!</h1>
					<HeadIcon>
						<BiSearchAlt onClick={() => navigate("/search-page")} />
					</HeadIcon>
				</Head>
				<h3>This season:</h3>
				<HighlightsCarousel />
				<h3>Popular:</h3>
				<ShowCase items={items} />
			</PageStyle>
			<Dashboard />
		</>
	);
}

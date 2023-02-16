import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./style";
import { getThisSeasonAnimes, Anime } from "../../services/anime";

export default function HighlightsCarousel() {
	const [items, setItems] = useState<Anime[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		getThisSeasonAnimes()
			.then((resp) => {
				const response = resp.data;
				setItems(response.data.Page.media);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container>
			<Carousel>
				{items
					.filter((el, i) => i <= 15)
					.map((el, i) => (
						<Carousel.Item key={i}>
							<img
								className="d-block w-100"
								src={el.bannerImage ? el.bannerImage : el.coverImage.large}
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
							/>
						</Carousel.Item>
					))}
				{/* <Carousel.Item>
					<img
						className="d-block w-100"
						src="https://img1.ak.crunchyroll.com/i/spire3/a7cea03c8dda9e261cebdccdc56c81e81649069179_main.jpg"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c991780212f588bb40431529a2fc1e5f.jpe"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://quintacapa.com.br/wp-content/uploads/2020/07/Hunter-x-Hunter-hunter-x-hunter-destaque.jpg"
					/>
				</Carousel.Item> */}
			</Carousel>
		</Container>
	);
}

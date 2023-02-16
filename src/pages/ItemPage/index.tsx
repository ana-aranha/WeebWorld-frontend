import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { stripHtml } from "string-strip-html";

import { GiReturnArrow } from "react-icons/gi";
import { Icon, InfoDivs, Banner, Info, StatusDiv } from "./style";
import { useState } from "react";

const status = {
	completed: "Completed",
	ongoing: "On Going",
	dropped: "Dropped out",
	planning: "Plan to",
	bookmark: "Bookmark",
};

export default function ItemPage() {
	const [status, setStatus] = useState("Bookmark");
	const [displayViewOption, setDisplayViewOption] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location.state);

	return (
		<>
			<Banner>
				<Icon>
					<GiReturnArrow onClick={() => navigate("/")} />
				</Icon>
				<img src={location.state.coverImage.large} />
				<Info>
					<h2>
						{location.state.title.english
							? location.state.title.english
							: location.state.title.romanji}
					</h2>
					<div>
						{location.state.genres.map((el: string, i: number) => (
							<StatusDiv key={i}>{el}</StatusDiv>
						))}
					</div>
				</Info>
			</Banner>
			<InfoDivs>
				<div>
					<p>
						<span>Status:</span> {location.state.status.toLowerCase()}
					</p>
					<p>
						<span>Episodes:</span> {location.state.episodes}
					</p>
				</div>
				<StatusDiv
					style={{ display: displayViewOption ? "none" : "block" }}
					color={status}
					onClick={() => {
						console.log("cliquei", displayViewOption),
							setDisplayViewOption(!displayViewOption);
					}}
				>
					{status}
				</StatusDiv>
				<div style={{ display: displayViewOption ? "block" : "none" }}>
					{["Completed", "On going", "Dropped out", "Plan to", "Bookmark"].map(
						(el, i) => (
							<StatusDiv
								key={i}
								color={el}
								onClick={() => {
									setStatus(el);
									setDisplayViewOption(!displayViewOption);
								}}
							>
								{el}
							</StatusDiv>
						),
					)}
				</div>
			</InfoDivs>
			<InfoDivs>
				<p>
					<span>Description:</span>{" "}
					{stripHtml(location.state.description).result}
				</p>
			</InfoDivs>
		</>
	);
}

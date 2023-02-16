import styled from "styled-components";

export const Banner = styled.div`
	position: absolute;
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 500px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.2),
		rgba(0, 0, 0, 0.7),
		rgba(0, 0, 0, 1)
	);

	img {
		width: 100%;
		height: 500px;
		object-fit: cover;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		position: relative;
		z-index: -10;
	}
`;

export const Icon = styled.div`
	cursor: pointer;
	font-size: 28px;
	color: white;
	text-shadow: 1px 1px 2px black;
	position: fixed;
	padding: 20px;
`;

export const Info = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-align: center;

	h2 {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 15px;
		color: #bcb5db;
	}

	> div {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 700px;
		gap: 15px;
	}
`;

export const StatusDiv = styled.div`
	padding: 10px;
	min-width: 115px;
	border: 1px solid #42484e;
	border-radius: 12px;
	margin-bottom: 10px;
	text-align: center;
	background-color: ${(props) => {
		switch (props.color) {
			case "Completed":
				return "#52C057";
				break;
			case "On going":
				return "#218BE6";
				break;
			case "Dropped out":
				return "#F65152";
				break;
			case "Plan to":
				return "#FAB029";
				break;
			default:
				return "#BCB5DB";
		}
	}};
`;

export const InfoDivs = styled.div`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	text-align: justify;
	white-space: pre-line;

	span {
		font-weight: bold;
	}

	div {
		display: flex;
		flex-direction: column;
	}
`;

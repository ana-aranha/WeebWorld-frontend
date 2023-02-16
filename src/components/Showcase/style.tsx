import styled from "styled-components";

export const Topic = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 2vh 4%;

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
		width: 42%;
		border-radius: 5px;
		max-width: 360px;
		max-height: 525px;
		min-height: 268px;
		height: 25%;
		padding: 8px;
		margin-bottom: 5%;
		background-color: rgb(214, 217, 219);
		text-align: center;
	}
	h2 {
		font-size: 18px;
		margin-bottom: 10px;
	}
	img {
		width: 100%;
		height: 100%;
		max-height: 460px;
		border-radius: 3px;
	}
`;

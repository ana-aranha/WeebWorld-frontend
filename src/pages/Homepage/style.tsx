import styled from "styled-components";

export const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		width: 100vw;
		padding: 5%;
		font-size: 20px;
		font-weight: bold;
	}
`;

export const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 2vh 5vw;

	h1 {
		font-size: 22px;
		word-wrap: break-word;
		text-align: center;
	}

	iframe {
		margin-top: -15px;
	}
`;

export const HeadIcon = styled.div`
	cursor: pointer;
	font-size: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* transition: all ease-in-out 200ms;
	position: relative; */
`;

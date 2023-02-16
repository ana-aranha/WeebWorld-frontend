import styled from "styled-components";

export const PostDiv = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 20px 14px;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	background-color: rgb(214, 217, 219);
	border-radius: 5px;
	display: flex;
	text-align: justify;
	gap: 10px;

	p {
		margin-top: 12px;
	}

	h3 {
		font-size: 20px;
		font-weight: 500;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	div:nth-child(1) {
		align-items: center;
		font-size: 20px;
		gap: 4px;

		span {
			font-size: 15px;
		}

		div:first-child {
			color: green;
		}

		div:last-child {
			color: red;
		}
	}
`;

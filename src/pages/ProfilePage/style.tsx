import styled from "styled-components";

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 80px;

	img {
		height: 100px;
		border-radius: 50%;
	}

	h2 {
		margin-top: 20px;
		font-size: 25px;
		font-weight: 600;
	}
`;

export const ProfileInfo = styled.div`
	padding: 20px;

	> h3 {
		font-size: 20px;
		font-weight: 500;
		margin: 25px 0 18px 0;
	}
`;

export const Overflow = styled.div`
	display: flex;
	overflow-y: scroll;
	gap: 10px;
`;

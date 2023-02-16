import * as React from "react";

import Dashboard from "../../components/Dashboard";
import UserContext from "../../contexts/UserContext";
import { UserContextType } from "../../services/anime";
import { Overflow, Profile, ProfileInfo } from "./style";
import { StatusDiv } from "../ItemPage/style";
import Post from "../../components/Post";

export default function ProfilePage() {
	const { user } = React.useContext(UserContext) as UserContextType;
	return (
		<>
			<Profile>
				<img src={user.avatar} />
				<h2>{user.username}</h2>
			</Profile>
			<ProfileInfo>
				<h3>Bookmarks:</h3>
				<Overflow>
					{["All", "Completed", "On going", "Dropped out", "Plan to"].map(
						(el, i) => (
							<StatusDiv
								key={i}
								color={el}
								onClick={() => {
									console.log("selecionei " + el);
								}}
							>
								{el}
							</StatusDiv>
						),
					)}
				</Overflow>
				<h3>Posts:</h3>
				<Post />
			</ProfileInfo>
			<Dashboard />
		</>
	);
}

import { useNavigate } from "react-router-dom";
import * as React from "react";

import { DashboardDiv } from "./style";
import UserContext from "../../contexts/UserContext";
import { ImMenu } from "react-icons/im";
import {
	BsHouseDoorFill,
	BsHouseDoor,
	BsPerson,
	BsPersonFill,
	BsPeople,
	BsPeopleFill,
} from "react-icons/bs";
import { AiOutlineHome, AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { UserContextType } from "../../services/anime";

export default function Dashboard() {
	const navigate = useNavigate();

	const { user } = React.useContext(UserContext) as UserContextType;

	return (
		<DashboardDiv>
			<BsPerson onClick={() => navigate(`/profile/${user.username}`)} />
			<BsPeople onClick={() => navigate("/community")} />
			<BsHouseDoor onClick={() => navigate("/")} />
			<AiOutlineMenu onClick={() => console.log("cliquei")} />
		</DashboardDiv>
	);
}

import * as React from "react";
import { DisabledContextType, UserContextType } from "../services/anime";

const UserContext = React.createContext<
	UserContextType | boolean | null | DisabledContextType
>(null);

export default UserContext;

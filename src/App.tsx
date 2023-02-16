import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/LoginPages/SignInPage";
import SignUpPage from "./pages/LoginPages/SignUpPage";
import HomePage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import SearchPage from "./pages/SearchPage";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import { User } from "./services/anime";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";

function App() {
	const [user, setUser] = useState<User>({
		username: "Bolinha",
		avatar:
			"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
	});

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path="/sign-in" element={<SignInPage />} />
						<Route path="/sign-up" element={<SignUpPage />} />
						<Route path="/" element={<HomePage />} />
						<Route path="/itempage/:name" element={<ItemPage />} />
						<Route path="/search-page" element={<SearchPage />} />
						<Route path="/profile/:username" element={<ProfilePage />} />
						<Route path="/community" element={<CommunityPage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;

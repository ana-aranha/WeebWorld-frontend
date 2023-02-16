import Dashboard from "../../components/Dashboard";
import Post from "../../components/Post";
import { CommunityFeed } from "./style";

export default function CommunityPage() {
	return (
		<>
			<CommunityFeed>
				<h2>Em breve comunidade..</h2>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</CommunityFeed>
			<Dashboard />
		</>
	);
}

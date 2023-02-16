import { PostDiv } from "./style";
import {
	IoIosArrowDropupCircle,
	IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function Post() {
	return (
		<PostDiv>
			<div>
				<div>
					<IoIosArrowDropupCircle onClick={() => console.log("cliquei")} />
				</div>
				<span>25</span>
				<div>
					<IoIosArrowDropdownCircle onClick={() => console.log("cliquei")} />
				</div>
			</div>
			<div>
				<h4>Postado por Bolinha</h4>
				<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					veritatis nemo et consequuntur cupiditate ex maiores odio, aspernatur
					repellat libero dolor rerum quo! Ea deleniti iusto quisquam reiciendis
					maxime sint?
				</p>
			</div>
		</PostDiv>
	);
}

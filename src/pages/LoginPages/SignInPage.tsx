import { PageStyle, Form, DivButton } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
//import UserContext from "../ContextConfig/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function SignInPage() {
	//const { setUsername, setConf } = useContext(UserContext);
	const [dataLogin, setDataLogin] = useState({
		email: "",
		password: "",
	});
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	function GettinLogin(event: React.FormEvent) {
		event.preventDefault();
		setDisabled(true);

		navigate("/homepage");
	}

	return (
		<PageStyle>
			<iframe
				src="https://giphy.com/embed/K0uKLQ34VlMyLbOZF9"
				width="180"
				height="200"
				allowFullScreen
			></iframe>
			<h1>Weeb World</h1>
			<Form onSubmit={GettinLogin}>
				<input
					type="email"
					placeholder="E-mail"
					value={dataLogin.email}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.email = e.target.value;
						setDataLogin(aux);
					}}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={dataLogin.password}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.password = e.target.value;
						setDataLogin(aux);
					}}
				/>

				<DivButton type="submit" disabled={disabled}>
					{disabled ? (
						<ThreeDots
							height="80"
							width="80"
							radius="9"
							color="#ffffff"
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
						/>
					) : (
						`Entrar`
					)}
				</DivButton>
			</Form>
			<Link to={"/registration"}>
				<p>Primeira vez? Cadastre-se!</p>
			</Link>
		</PageStyle>
	);
}

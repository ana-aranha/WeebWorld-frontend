import { PageStyle, Form, DivButton } from "./style";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import joi from "joi";

const RegistrationSchema = joi.object({
	email: joi.string().required(),
	name: joi.string().required().trim(),
	password: joi.string().required(),
	confirmPassword: joi.ref("password"),
});

export default function SignUpPage() {
	const [disabled, setDisabled] = useState(false);
	const [displayViewOption, setDisplayViewOption] = useState(false);
	const [dataRegistration, setDataRegistration] = useState({
		email: "",
		name: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	async function GettinRegistration(event: React.FormEvent) {
		event.preventDefault();
		setDisabled(true);
		const validation = RegistrationSchema.validate(dataRegistration);

		if (validation.error) {
			alert(validation.error.message);
			setDisabled(false);
			return;
		}

		navigate("/");
	}

	return (
		<PageStyle>
			<iframe
				src="https://giphy.com/embed/K0uKLQ34VlMyLbOZF9"
				width="180"
				height="200"
				allowFullScreen
			></iframe>
			<h1>Weeb world</h1>
			<Form onSubmit={GettinRegistration}>
				<input
					type="text"
					placeholder="Nome"
					value={dataRegistration.name}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.name = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="email"
					placeholder="E-mail"
					value={dataRegistration.email}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.email = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={dataRegistration.password}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.password = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					value={dataRegistration.confirmPassword}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.confirmPassword = e.target.value;
						setDataRegistration(aux);
					}}
					onKeyUp={() => {
						dataRegistration.confirmPassword === dataRegistration.password
							? setDisplayViewOption(false)
							: setDisplayViewOption(true);
					}}
				/>
				<p
					style={{
						display: displayViewOption ? "block" : "none",
						color: "rgb(211, 55, 44)",
					}}
				>
					Senhas n??o correspondem
				</p>

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
						`Cadastrar`
					)}
				</DivButton>
			</Form>
			<Link to={"/"}>
				<p>J?? tem uma conta? Entre agora!</p>
			</Link>
		</PageStyle>
	);
}

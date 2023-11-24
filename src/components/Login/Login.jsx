import React, { useEffect, useState } from "react";
import "./Login.scss";
import { validarUsuario } from "../../services/requests/users";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const Navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const userData = JSON.parse(localStorage.getItem("userData"))?.[0];

	useEffect(() => {
		if (userData) {
			window.location.href = "/home";
		}
	}, []);
	function validarFormulario() {
		if (email === "" || password === "") {
			alert("Por favor, preencha todos os campos");
			return false;
		} else {
			return true;
		}
	}
	const onSubmit = async () => {
		validarFormulario();
		if (!validarFormulario()) {
			return;
		}
		const response = await validarUsuario(email, password);
		console.log(response);
		if (response.length > 0) {
			alert("Login efetuado com sucesso");
			localStorage.setItem("userData", JSON.stringify(response));
			console.log("Local storage:", localStorage.getItem("userData"));
			Navigate("/");
			window.location.reload();
		} else {
			alert("Email ou senha inválidos");
		}
	};

	return (
		<div className="login-container">
			<h1 className="text-center fw-bolder m-3">Login</h1>
			<form className="formulario login">
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Email:
					</label>
					<input
						type="text"
						className="form-control"
						style={{ width: "100%", maxWidth: "500px" }}
						id="formGroupExampleInput"
						placeholder="Digite seu Email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Senha:
					</label>
					<input
						type="password"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Digite sua senha"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Não possui cadastro?
						<a href="signIn"> Clique aqui</a>
					</label>
				</div>
				<button
					type="button"
					className="btn btn-primary w-100"
					onClick={onSubmit}
				>
					Entrar
				</button>
			</form>
		</div>
	);
}

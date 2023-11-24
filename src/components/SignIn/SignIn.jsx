import React, { useEffect, useState } from "react";
import "./SingIn.scss";
import {
	cadastrarUsuario,
	verificarEmailRepetido,
} from "../../services/requests/users";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

export default function SignIn() {
	const navigate = useNavigate();
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [password, setPassword] = useState("");
	const [verify, setVerify] = useState("");
	const userData = JSON.parse(localStorage.getItem("userData"))?.[0];

	useEffect(() => {
		if (userData) {
			// Usuário logado?
			// Redirecionar para a home
			window.location.href = "/home";
		}
	}, []);

	const emailRegExp = /\S+@\S+\.\S{3,}/;

	const validarFormulario = () => {
		if (
			nome === "" ||
			// telefone === "" ||
			email === "" ||
			password === "" ||
			verify === ""
		) {
			alert(
				"Por favor, preencha todos os campos (nome, telefone, email, senha e confirmação)."
			);
			return false;
		} else if (!emailRegExp.test(email)) {
			alert("Por favor, informe um e-mail válido.");
			return false;
		} else if (nome.length < 2 || nome.length > 30) {
			alert("O campo nome não atingiu o número mínimo de caracteres.");
			return false;
			// } else if (telefone.length < 10 || telefone.length > 11) {
			//   alert("Digite um telefone válido (Utilize DDD).");
			//   return false;
		} else if (password.length < 6) {
			alert("A senha deve ter no mínimo 6 digitos.");
			return false;
		} else if (password !== verify) {
			alert("A senha e a confirmação devem ser iguais.");
			return false;
		} else {
			return true;
		}
	};
	function NovoUsuario() {
		const newUser = {
			nome: nome,
			telefone: telefone,
			email: email,
			senha: password,
		};
		return newUser;
	}

	const cadastro = async () => {
		if (!validarFormulario()) {
			return;
		}
		const confirmacao = window.confirm("Está certo das suas informações?");
		if (!confirmacao) {
			return;
		}
		const responseEmail = await verificarEmailRepetido(email);
		if (responseEmail) {
			alert("O e-mail informado já foi utilizado.");
			return;
		}

		const novoUsuario = NovoUsuario();
		const response = await cadastrarUsuario(novoUsuario);
		if (response === "Cadastrado!") {
			alert("Cadastrado com sucesso!");
			navigate("/");
		} else {
			alert(response);
		}
	};
	return (
		<div className="singIn-container">
			<h1 className="text-center fw-bolder m-4">Cadastro</h1>
			<form className="formulario login ">
				<div className="mb-1">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Nome:
					</label>
					<input
						type="text"
						className="form-control me-5 mb-2"
						style={{ width: "100%" }}
						placeholder="Digite seu Nome"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
				</div>
				<div className="mb-1">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Email:
					</label>
					<input
						type="text"
						className="form-control me-5 mb-2"
						placeholder="Digite sua Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-1">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Telefone: (Opcional)
					</label>
					<InputMask
						type="text"
						mask="(99) 99999-9999"
						className="form-control me-5 mb-2"
						style={{ width: "100%" }}
						// id="formGroupExampleInput"
						placeholder="Digite seu Telefone"
						value={telefone}
						onChange={(e) => setTelefone(e.target.value)}
					/>
				</div>
				<div className="mb-1">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Senha:
					</label>
					<input
						type="password"
						className="form-control me-5 mb-2"
						style={{ width: "100%" }}
						// id="formGroupExampleInput"
						placeholder="Digite sua Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Confime sua senha:
					</label>
					<input
						type="password"
						className="form-control me-5 mb-3"
						style={{ width: "100%" }}
						// id="formGroupExampleInput"
						placeholder="Confirme sua Senha"
						value={verify}
						onChange={(e) => setVerify(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Já possui cadastro?
						<a href="/"> Clique aqui</a>
					</label>
				</div>
				<button
					type="button"
					className="btn btn-primary w-100"
					onClick={cadastro}
				>
					Entrar
				</button>
			</form>
		</div>
	);
}

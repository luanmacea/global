import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <form className="formulario login">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            id="formGroupExampleInput"
            placeholder="Digite seu Email"
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
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label"
            onClick={console.log("teste")}
          >
            Não possui cadastro?
            <a href="signIn"> Clique aqui</a>
          </label>
        </div>
        <button type="button" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  );
}

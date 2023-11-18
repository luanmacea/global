import React from "react";
import "./SignIn.css";

export default function SignIn() {
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
      <h1>Cadastro</h1>
      <form className="formulario login">
        <div className="mb-1">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            id="formGroupExampleInput"
            placeholder="Digite seu Nome"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email:
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Digite sua Email"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Telefone:
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            id="formGroupExampleInput"
            placeholder="Digite seu Telefone"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Senha:
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            id="formGroupExampleInput"
            placeholder="Digite sua Senha"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Confime sua senha:
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            id="formGroupExampleInput"
            placeholder="Confirme sua Senha"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label"
            onClick={console.log("teste")}
          >
            Não possui cadastro?
            <a href="login"> Clique aqui</a>
          </label>
        </div>
        <button type="button" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  );
}

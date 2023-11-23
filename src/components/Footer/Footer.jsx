import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Container py-4 px-3">
      <div className="apresentacao mx-3">
        <h1 className="title d-flex justify-content-center">MedSync</h1>
        <p className="text text-center align-content-around w-75">
          Um sistema para salvar vidas em ermegencia
        </p>
      </div>
      <div className="ajustes mx-4">
        <h3>Números</h3>
        <p>Polícia - 190</p>
        <p>Bombeiros - 193</p>
        <p>SAMU - 192</p>
        <p>Disque Denuncia - 181</p>
        <p>Defesa Civial - 199</p>
      </div>
      <div className="ajustes mx-5">
        <h3>Páginas</h3>
        <div className="links d-flex justify-content-around flex-column">
          <a className="mb-3 link-dark" href="/home">Home</a>
          <a className="mb-3 link-dark" href="/about">Sobre o grupo</a>
          <a className="mb-3 link-dark" href="/perfil">Conta</a>
        </div>
      </div>
      <div className="ajustes mx-5">
        <h3>Parceiros</h3>
        <p>Fiap</p>
        <p>Hapdive</p>
        <p>SAMU - 192</p>
        <p>Disque Denuncia - 181</p>
        <p>Defesa Civial - 199</p>
      </div>
    </div>
  );
}

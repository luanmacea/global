import React, { useEffect } from "react";
import "./Perfil.css";

export default function Perfil() {
  const userData = JSON.parse(localStorage.getItem("userData"))?.[0];

  useEffect(() => {
    if (!userData) {
      window.location.href = "/";
    }
  }, []);

  const handleClick = () => {
    console.log("local: ", userData);
  };
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
      <h1 className="text-center fw-bolder mb-4">Seu Perfil</h1>
      <div className="card_container area">
        <label className="dados m-1">Id: {userData?.id}</label>
        <label className="dados m-1">Nome: {userData?.nome}</label>
        <label className="dados m-1">Email: {userData?.email}</label>
        <label className="dados m-1">Telefone: {userData?.telefone}</label>
        <label className="dados m-1">Senha: {userData?.senha}</label>
      </div>
      {/* <button className="btn btn-primary" onClick={handleClick}>
        Clique
      </button> */}
    </div>
  );
}

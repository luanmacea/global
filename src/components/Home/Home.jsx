import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="titulo">Faça e depois pergunte</h1>
        <p className="descricao">
          Não perca tempo respondendo perguntas. Com todas as informações
          médicas salvas, vá direto ao hospital sem se preocupar com
          questionários. Seu histórico está seguro e disponível quando
          necessário.
        </p>
        <hr className="my-4 my" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

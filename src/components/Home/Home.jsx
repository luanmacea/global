import React, { useEffect } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  const userData = JSON.parse(localStorage.getItem("userData"))?.[0];

  useEffect(() => {
    if (!userData) {
      window.location.href = "/";
    }
  }, []);
  const handleClick = () => {
    console.log("clicou");
    console.log("Local storage:", localStorage.getItem("userData"));
  };
  return (
    <div>
      <div className="jumbotron">
        <h1 className="titulo">Faça e depois pergunte</h1>
        <p className="descricao mb-5 w-50">
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
        <a
          className="btn btn-primary btn-lg"
          href="#"
          role="button"
          onClick={handleClick}
        >
          Learn more
        </a>
      </div>

      <h1 className="text-center">Vantagens</h1>
      <div className="card_container">
        <Card className="card m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title className="">Agilidade</Card.Title>
            </div>
            <Card.Text className="text p-1">
              Agilidade redefinida para acesso instantâneo e eficiente às
              informações médicas essenciais. Simplifique e acelere o cuidado de
              saúde.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title className="">Facilidade</Card.Title>
            </div>
            <Card.Text className="text p-1">
              MedSync simplifica o cuidado de saúde, permitindo que você entre
              no hospital sem se preocupar com detalhes complicados, graças ao
              acesso fácil ao seu histórico médico.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title className="">Intuitivo</Card.Title>
            </div>
            <Card.Text className="text p-1">
              MedSync, o seu parceiro intuitivo em saúde, proporciona uma
              experiência simplificada e fácil, tornando o acesso às informações
              médicas uma jornada natural e eficaz.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="container">
        <h1 className="text-center">Sobre o Projeto</h1>
        <div className="sobre">
          <div className="sobre_text">
            <h3 className="sobre_title">O que iremos fazer?</h3>
            <p>
              Criar um sistema para que o usuário registre todos os detalhes de
              seu histórico médico, garantindo que, ao chegar ao hospital, todas
              as informações necessárias estejam prontas para agilizar o
              atendimento.
            </p>
          </div>
          <div className="sobre_text">
            <h3 className="sobre_title">Quais nossos diferenciais?</h3>
            <p>
              No nosso sistema, os médicos terão a opção de utilizar o
              reconhecimento facial para identificar rapidamente as pessoas
              durante situações de emergência. Além disso, possibilitaremos o
              anexo do histórico médico do paciente ao de seus parentes,
              facilitando a análise de possíveis doenças hereditárias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

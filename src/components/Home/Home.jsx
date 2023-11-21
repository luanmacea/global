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
        <p className="descricao mb-5">
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
              {/* <Card.Img
                className="img w-25 h-25 p-1"
                variant="top"
                src={Luan}
              /> */}
              <Card.Title className="">Agilidade</Card.Title>
            </div>
            <Card.Text className="text p-1">
              Oi, tenho 19 anos e meu nome é Luan. Estou atualmente cursando
              Engenharia de Software e estou ansioso para aprender mais nesse
              campo fascinante da tecnologia.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              {/* <Card.Img
                className="img w-25 h-25 p-1"
                variant="top"
                src={Luan}
              /> */}
              <Card.Title className="">Facilidade</Card.Title>
            </div>
            <Card.Text className="text p-1">
              Oi, tenho 19 anos e meu nome é Luan. Estou atualmente cursando
              Engenharia de Software e estou ansioso para aprender mais nesse
              campo fascinante da tecnologia.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="card m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              {/* <Card.Img
                className="img w-25 h-25 p-1"
                variant="top"
                src={Luan}
              /> */}
              <Card.Title className="">Intuitivo</Card.Title>
            </div>
            <Card.Text className="text p-1">
              Oi, tenho 19 anos e meu nome é Luan. Estou atualmente cursando
              Engenharia de Software e estou ansioso para aprender mais nesse
              campo fascinante da tecnologia.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

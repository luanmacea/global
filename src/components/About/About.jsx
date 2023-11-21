import React, { useEffect } from "react";
import "./About.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Luan from "../../assets/About/Luan.png";

export default function About() {
  const userData = JSON.parse(localStorage.getItem("userData"))?.[0];

  useEffect(() => {
    if (!userData) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <h1 className="text-center fw-bolder mb-4">Conheça nosso time</h1>
      <p
        className="text-center"
        style={{ maxWidth: "500px", margin: "0 auto", fontSize: "18px" }}
      >
        Quem é a equipe maravilhosa por tras desse projeto que pode ajudar a
        salvar milhares de vidas?
      </p>
      <div className="card_container">
        <Card className="card m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Img
                className="img w-25 h-25 p-1"
                variant="top"
                src={Luan}
              />
              <Card.Title className="ms-3">Luan Macea</Card.Title>
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
              <Card.Img
                className="img w-25 h-25 p-1"
                variant="top"
                src={Luan}
              />
              <Card.Title className="ms-3">Luan Macea</Card.Title>
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

import React from "react";
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};

const Feature = () => {
  const features = [
    {
      id: 1,
      img: "./images/missao.png",
      title: "MISSÃO",
      desc: "Nossa missão é gerar inovação e resultados sólidos para Marcas, negócios e pessoas de diversos segmentos e tamanhos, desenvolvendo estratégias dimensionadas artesanalmente visando quatro pilares fundamentais do Marketing como Tráfego, Engajamento, Conversão e Retenção, seja desenvolvendo projetos completos e/ou suprimos necessidades pontuais para obtenção de lucros maiores e sustentáveis.",
    },
    {
      id: 2,
      img: "./images/visao.png",
      title: "VISÃO",
      desc: "Enxergamos as oportunidades de mercado como pontos de benefícios para pessoas, o mercado necessita de estratégias de Marketing onde as marcas gerem soluções que atendam às necessidades das pessoas em diversos níveis e acreditamos que é possível diferenciar-se de forma autêntica gerando resultados satisfatórios e sustentáveis para todos os envolvidos no ciclo de consumo.",
    },
    {
      id: 3,
      img: "./images/valores.png",
      title: "VALORES",
      desc: "Unicidade e Cooperação são nossos valores centrais. Unicidade onde temos a plena consciência que estamos todos conectados e as pessoas são o espelho da alma, gerando negócios sustentáveis para todos os envolvidos, desde nós como prestadores de serviço, nossos parceiros(clientes) e os clientes de nossos parceiros, pensando na singularidade de cada negócio, afinal, empresas são feitas de pessoas e cada um de nós é um universo coexistindo e esse princípio gera cooperação fortalecendo e criando relações ganha-ganha com todos envolvidos engajados nos resultados.",
    },
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark text-uppercase">
                <span className="text-warning">Quem Somos</span>
              </h3>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};

export default Feature;

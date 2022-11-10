import React from "react";
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    {
      title: "Branding",
      desc: "Branding ou Brand Management é uma estratégia de gestão da marca que visa torná-la mais reconhecida pelo seu público e presente no mercado. A estratégia busca a admiração e desejo pelos valores que a marca cria em torno de si mesma. Seu objetivo principal é despertar sensações e criação de conexões fortes, que serão fatores relevantes para a escolha do cliente pela marca no momento de decisão de compra.",
    },
    {
      title: "Criação de sites",
      desc: "Criar um site é essencial para que a sua empresa ganhe mais visibilidade na internet e conquiste, por consequência, um número maior de clientes. Ele funciona como uma vitrine para o seu negócio, reunindo todas as informações importantes para o seu público-alvo.",
    },
    {
      title: "Gestão de tráfego",
      desc: "Tráfego nada mais é do que gerar um número de pessoas visitando seu negócio, no ambiente virtual ele pode ser feito em diferentes canais e o que gera resultados no curto prazo é chamado de SEM (Search Engine Marketing) que são os anúncios pagos, por exemplo, aqueles que aparecem nas primeiras pesquisas do Google, Facebook, Instagram e até mesmo em outros canais como Tik Tok, Linkedin, Shopee, Mercado livre e outros dependendo do seu nicho de mercado.",
    },
    {
      title: "Criação de conteúdo",
      desc: " Você é o que você publica, a criação de conteúdo é capaz de mexer com o público de várias maneiras. Em um cenário digital como o que vivemos hoje, marcas que querem se destacar precisam criar conteúdo, mas, não qualquer conteúdo. É Conteúdo relevante e de qualidade. ",
    },
    {
      title: "Copywriting ",
      desc: "Copywriting é o processo de produção de textos persuasivos para ações de Marketing e Vendas, como o conteúdo de e-mails, sites, redes sociais, catálogos, anúncios e cartas de vendas, por exemplo. O copywriting também é conhecido como escrita persuasiva. Isso significa que o objetivo é persuadir o público-alvo. E quais são as armas da persuasão utilizadas na criação de um bom copywriting? A resposta são os Gatilhos mentais.",
    },
    {
      title: "Consultoria",
      desc: "Uma consultoria empresarial trará o conhecimento necessário para que o empreendedor utilize as ferramentas e indicadores corretos para conquistar os seus objetivos. Além disso, o consultor irá auxiliar o empresário a avaliar o sucesso ou o fracasso das ações implementadas e propor novas ações para a sua empresa.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
      }}
      className="section"
      id="service"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-light ">Serviços</span>
              </h3>
              <p className="text-muted">
                Algumas ações que possamos fazer para fortalecer sua marca
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                  <i className={service.icon}></i>
                </div>
                <h5 className=" font-weight-normal pt-1 mb-4">
                  {service.title}
                </h5>
                <p className=" text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;

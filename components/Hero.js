import React from "react";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative ">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Duplo infinito
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                SOCIAL MEDIA
              </h1>
              <p className="text-muted mb-2 pb-2">
                O Social Media, ou Analista de Redes Sociais, é o profissional
                responsável pela gestão dos perfis de uma empresa nas redes
                sociais. Essa função vai além da criação e publicação de
                conteúdo online, abrangendo o desenvolvimento de uma boa
                estratégia, o que exige pesquisa, análise de mercado e
                atualização constante.
              </p>
              <ul>
                <li className="text-muted mb-2">
                  <i
                    style={{ display: "flex" }}
                    className="mdi mdi-checkbox-marked-circle text-primary h5 mr-2"
                  ></i>
                  ENTENDER A SUA AUDIÊNCIA E CONECTAR-SE COM O SEU PÚBLICO
                </li>
                <li className="text-muted mb-2">
                  <i
                    style={{ display: "flex" }}
                    className="mdi mdi-checkbox-marked-circle text-primary h5 mr-2"
                  ></i>
                  GERAR MAIS ALCANCE PARA A SUA EMPRESA
                </li>
                <li className="text-muted mb-2">
                  <i
                    style={{ display: "flex" }}
                    className="mdi mdi-checkbox-marked-circle text-primary h5 mr-2"
                  ></i>
                  CONSTRUÇÃO DE UMA IMAGEM DA MARCA
                </li>

                <li className="text-muted mb-2">
                  <i
                    style={{ display: "flex" }}
                    className="mdi mdi-checkbox-marked-circle text-primary h5 mr-2"
                  ></i>
                  ESTAR À FRENTE DA CONCORRÊNCIA
                </li>

                <li className="text-muted mb-2">
                  <i
                    style={{ display: "flex" }}
                    className="mdi mdi-checkbox-marked-circle text-primary h5 mr-2"
                  ></i>
                  AUMENTAR AS VENDAS E O RETORNO SOBRE O INVESTIMENTO (ROI).
                </li>
              </ul>
              <a
                href="http://bit.ly/falecomaduploinfinito"
                className="btn btn-secondary mt-3"
              >
                Saiba Mais <span className=" ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/social-media.png"
                alt="Social Media Duplo Infinito"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

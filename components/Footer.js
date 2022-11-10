import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Acesso Rápido",
      child: [
        { title: "Home", link: "/" },
        { title: "Quem Somos", link: "#Feature" },
        { title: "Serviços", link: "#service" },
      ],
    },
  ];

  return (
    <section className="footer section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <div className="mb-4">
              <p className="text-muted mt-4 mb-2">
                comercial@duploinfinito.com
              </p>
              <h6 className="text-muted font-weight-normal">51 99143-1551</h6>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={8}>
                <h6 className="text-dark mb-3">Outros endereços</h6>
                <p className="text-muted f-14">
                  Rua Inconfidência, 650, sala 1302 - Mal. Rondon, Canoas - RS,
                  92020-300
                </p>
                <h6 className="text-muted pb-2">
                  Email: duploinfinito@gmail.com
                </h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/duploinfinitomkt">
                      <i className="mdi mdi-facebook">
                        <img
                          src="/images/icons8-facebook-novo-48.png"
                          alt="Facebook"
                        ></img>
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://instagram.com/duploinfinito88?igshid=YmMyMTA2M2Y=">
                      <i className="mdi mdi-instagram">
                        <img
                          src="/images/icons8-instagram-48.png"
                          alt="Instagram"
                        ></img>
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/duplo-infinito-solu%C3%A7%C3%B5es-criativas/">
                      <i className="mdi mdi-linkedin">
                        <img
                          src="/images/icons8-linkedin-48.png"
                          alt="Linkedin"
                        ></img>
                      </i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2022 © Design by Duplo Infinito</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;

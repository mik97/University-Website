import React from "react";
import "../css/Footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container className="containerFooter">
        <Row>
          <Col>
            <p>
              UNICAM Università degli Studi di Camerino <br />
              Piazza Cavour 19/f 62032 Camerino MC <br />
              numero verde: 800 054 000 <br />
              (lun-ven: 8.30-13.30 lun-mer 15.00 -18.00)
              <br />
              P.IVA: 00291660439 C.F.: 81001910439
              <br />
              posta certificata: protocollo@pec.unicam.it
            </p>
          </Col>
          <Col>
            <Nav.Link className="navslinkfooter">Biblioteche e Musei</Nav.Link>
            <Nav.Link className="navslinkfooter">
              WebMagazine "Scienza & Lode"
            </Nav.Link>
            <Nav.Link className="navslinkfooter">E-learning</Nav.Link>
            <Nav.Link className="navslinkfooter">Orientamento</Nav.Link>
            <Nav.Link className="navslinkfooter">Stage & Placement</Nav.Link>
            <Nav.Link className="navslinkfooter">
              Servizio studenti disabili e DSA
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link className="navslinkfooter">Tutorato</Nav.Link>
            <Nav.Link className="navslinkfooter">
              Abilitazione scientifica nazionale
            </Nav.Link>
            <Nav.Link className="navslinkfooter">WiFi</Nav.Link>
            <Nav.Link className="navslinkfooter">Merchandising</Nav.Link>
            <Nav.Link className="navslinkfooter">
              Amministrazione Trasparente
            </Nav.Link>
            <Nav.Link className="navslinkfooter">
              Qualità e Valutazione
            </Nav.Link>
            <Nav.Link className="navslinkfooter">
              Fatturazione elettronica e Split Payment
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link className="navslinkfooter">
              Suggerimenti, reclami, segnalazioni
            </Nav.Link>
            <Nav.Link className="navslinkfooter">Esito concorsi</Nav.Link>
            <Nav.Link className="navslinkfooter">
              Dona all'Università di Camerino
            </Nav.Link>
            <Nav.Link className="navslinkfooter">Sitemap</Nav.Link>
            <Nav.Link className="navslinkfooter">Credits</Nav.Link>
            <Nav.Link className="navslinkfooter">Dati di monitoraggio</Nav.Link>
            <Nav.Link className="navslinkfooter">
              Privacy - Note legali
            </Nav.Link>
          </Col>
        </Row>
        <Row>
          <Col className="contatti">
            <Nav.Link className="navslinkfooter">
              Contatti e Assistenza
            </Nav.Link>
          </Col>
        </Row>
        <Row>
          <Col className="copyright">
            Copyright 2015-2019 @ Università degli Studi di Camerino
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;

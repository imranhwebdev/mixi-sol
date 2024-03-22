import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import siteLogo from "../assets/img/footer-logo.svg";
import footerLeftStar from "../assets/img/footer-left-star.png";
import footerRightStar from "../assets/img/footer-right-star.png";
export default function Footer() {
  const footerLeftDesc = "Everything is only as strong as the community!";
  const currentYear = new Date().getFullYear();
  const Copyright = `Copyright @ ${currentYear}  MIXI Coin.<br/> All rights reserved. Fun mixer started.`;

  return (
    <footer className="footer">
      <Container className="footer-wrapper">
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="footer__content__area text-center">
              <a href="/" className="footer__logo">
                <img src={siteLogo} alt="Footer Logo" />
              </a>
              <p>{footerLeftDesc}</p>

              <p className="copy__right" dangerouslySetInnerHTML={{ __html: Copyright }} />
              
            </div>
          </Col>
        </Row>
        <figure className="footer_left_star">
          <img src={footerLeftStar} alt="" />
        </figure>
        <figure className="footer_right_star">
          <img src={footerRightStar} alt="" />
        </figure>
      </Container>
    </footer>
  );
}

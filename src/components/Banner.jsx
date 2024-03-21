import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTelegramPlane, FaInstagram  } from "react-icons/fa";
import sociallogo1 from "../assets/img/socialicon1.svg";
import sociallogo4 from "../assets/img/socialicon4.svg";
import heroshap2 from "../assets/img/hero-top-left-star.png";
import AboutLefttImg from "../assets/img/about-left-img.png";
import star1 from "../assets/img/about-left-big-star.png";
import star2 from "../assets/img/about-left-small-star.png";
export default function Banner() {
  const title = "$MIXI";
  const desc =
    "Mixi all meme coins and their communities together on SOL and change the memeverse with the Mixi cosmo cat. Love it, build it and shill for generational wealth.";
    const AboutLeftT = "pepe? MIXI <span>shib? MIXI</span>doge? MIXI";
  const SocialItems = [
    {
      imageSrc: sociallogo1,
      url: "https://x.com/mixicoin",
    },
    {
      icon: <FaTelegramPlane />,
      url: "https://t.me/mixicoin",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/mixicoin",
    },
    {
      imageSrc: sociallogo4,
      url: "https://www.tiktok.com/mixicoin",
    },
  ];

  return (
    <div className="banner">
      <figure className="banner__shap2">
        <img src={heroshap2} alt="" />
      </figure>
      <figure className='a_star1'>
          <img src={star1} alt="Mixi about star" />
      </figure>
      <figure className='a_star2'>
          <img src={star2} alt="Mixi about star" />
      </figure>
      <Container>
        <Row>
          <Col lg={5} md={6}>
            <div className="banner-content">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <p>{desc}</p>
              <a target='_blank' href="#" className='boxed__btn lg'>BUY NOW</a>
              <ul className="social__media">
                {SocialItems.map((SocialItem, index) => (
                  <li key={index}>
                    <a href={SocialItem.url} target="_blank">
                      {SocialItem.icon ? (
                        SocialItem.icon
                      ) : (
                        <img src={SocialItem.imageSrc} alt="Social Media" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={7} md={6} className="text-end">
            
            <div className="about-left">
              <figure className="about__img">
                  <img src={AboutLefttImg} alt="" />
              </figure>
              <h4 dangerouslySetInnerHTML={{ __html: AboutLeftT }} />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

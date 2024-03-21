import React, { useEffect, useState } from "react";
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import BgVideo from '../assets/mixi.mp4'
import SectionTitle from './SectionTitle';
import phase1_img from '../assets/img/phase1-img.png';
import phase2_img from '../assets/img/phase2-img.png';
import phase3_img from '../assets/img/phase3-img.png';
import quarcodeimg from '../assets/img/quar_code.png';
import roadMapLeftStar from '../assets/img/download_left_star.png';
import roadMapRightStar from '../assets/img/download_right_star.png';
import ReactPlayer from 'react-player';
export default function MoonMap() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);

    const [key, setKey] = useState(0);

    const handleVideoEnded = () => {
      setKey((prevKey) => prevKey + 1);
    };

  const title = "about $mixi";
  const desc = "Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this year? Did you also miss copies of them that weren't all made just for the community? But you can still be strong part of the new community? Yes? Either way, Mixi, the magic cosmo cat, was born to connect all communities and open the gateway to unbelievable gains and takeover the meme space with secret formulas.";

  const download_text = "DOWNLOAD PACK";
  const download_link = "https://drive.google.com/file/d/1crio1uVDNu6z4XAcLVcKghx1dci3YRto/view?usp=sharing";

  return (
    <div className="moonmap__area" id='roadmap' data-aos="fade-up">
      <figure className='road_map_leftstar'>
        <img src={roadMapLeftStar} alt="" />
      </figure>
      <figure className='road_map_rightstar'>
        <img src={roadMapRightStar} alt="" />
      </figure>
      <Container>
        <SectionTitle
          title='MOON MAP'
          des='Mixi is using Starship rocket and AI power on our joint space mission.'
        />
        <Row className='service_items'>
            <Col md={6}>
              <div className="moonapp_content">
                <h3 className='mb-3'>PHASE 1</h3>
                <figure className='phase__img'>
                    <img src={phase1_img} alt="" />
                </figure>
              </div>
            </Col>
            <Col md={6}>
              <div className="moonapp_content">
                <h3 className='mb-3'>PHASE 2</h3>
                <figure className='phase__img'>
                    <img src={phase2_img} alt="" />
                </figure>
              </div>
            </Col>
        </Row>
        <Row className='quear_code_area justify-content-center'>
            <Col md={8}>
                <figure className='moonmap_bottom_left_img'>
                  <ReactPlayer
                      key={key}
                      url={BgVideo} // replace with your video URL
                      playing={true}
                      loop={true}
                      width="100%"
                      height="512px"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      muted={true}  // Set muted to true for autoplay
                      onEnded={handleVideoEnded}
                      controls={false} 
                    />
                </figure>
                <div className="content">
                  <h2>VIBE, SHILL, HOLD, EVERYBODY HOLD</h2>
                  <a target='_blank' href="#" className='boxed__btn lg'>BUY NOW</a>
                </div>
            </Col>
        </Row>
        <Row className="align-items-center">
            <Col lg={7}>
              <div className="moonapp_content">
                <figure className='phase__img'>
                    <img src={phase3_img} alt="" />
                </figure>
              </div>
            </Col>
            <Col lg={5}>
                <h3 className='mb-3'>PHASE 3</h3>
                <p>Space Overtake...</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

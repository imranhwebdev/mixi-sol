import React, { useEffect, useState } from "react";
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import { FaClipboardCheck  } from "react-icons/fa";
import BgVideo from '../assets/mixi.mp4'
import phase1_img from '../assets/img/phase1-img.png';
import phase2_img from '../assets/img/phase2-img.png';
import phase3_img from '../assets/img/phase3-img.png';
import copyTxt from '../assets/img/copyTxt.png';
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

  const [textToCopy, setTextToCopy] = useState('So11111111111111111111111111111111111111112');
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setIsCopied(true);
        })
        .catch(err => {
          console.error('Failed to copy to clipboard: ', err);
        });
    };

  return (
    <div className="moonmap__area" id='roadmap' data-aos="fade-up">
      <Container>
        <Row className='service_items'>
            <Col md={6}>
              <div className="moonapp_content one">
                <h3 className='mb-3'>Phase 1</h3>
                <figure className='phase__img'>
                    <img src={phase1_img} alt="" />
                </figure>
              </div>
            </Col>
            <Col md={6}>
              <div className="moonapp_content two">
                <h3 className='mb-3'>Phase 2</h3>
                <figure className='phase__img'>
                    <img src={phase2_img} alt="" />
                </figure>
              </div>
            </Col>
        </Row>
        <Row className='quear_code_area justify-content-center'>
            <Col className="text-center">
                <div className='moonmap_bottom_left_img'>
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
                </div>
                <div className="content">
                  <h4>VIBE, SHILL, HOLD, EVERYBODY HOLD</h4>
                  <div className="tokenomics_copyTxt copytoclipboard">
                     <div className="token-info">
                      <span className='c_title'>Contract Address:</span> 
                      <div className="tNumber">
                        <input readOnly type="text"  value={textToCopy}
                              onChange={(e) => setTextToCopy(e.target.value)} />
                          <button onClick={handleCopyToClipboard}>
                            {!isCopied && (
                              <span>
                                <img src={copyTxt} alt="Copy Text" />
                              </span>
                            )}
                            {isCopied && (
                              <span className='copyed'>
                                <FaClipboardCheck  />
                              </span>
                            )}
                        </button>
                      </div>
                     
                     </div>
                  </div>
                  
                  <a target='_blank' href="#" className='boxed__btn lg'>BUY NOW</a>
                </div>
            </Col>
        </Row>
        <Row className="align-items-center" data-aos="fade-up">
            <Col lg={7} md={6} className="order-md-1 order-2">
              <div className="phase3Img">
                <figure className='road_map_leftstar'>
                  <img src={roadMapLeftStar} alt="" />
                </figure>
                <img src={phase3_img} alt="" />
              </div>
            </Col>
            <Col lg={5} md={6} className="order-md-2 order-1">
            <div className="moonapp_content">
              <h3 className='mb-3'>Phase 3</h3>
                <p>Space Overtake...</p>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

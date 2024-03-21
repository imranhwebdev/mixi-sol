import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll'
import logo from '../assets/img/Logo.svg'

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed);
        return () => {
          window.removeEventListener('scroll', setFixed);
        };
      }, []);
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="header__logo">
                        <Navbar.Brand href="/">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                    </div>
                    <a target='_blank' href="http://app.mixicoin.com/" className='boxed__btn'>LAUNCH APP</a>
                </Container>
            </Navbar>
        </header>
    )
}
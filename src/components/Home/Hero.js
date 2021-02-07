import React from 'react';

import { Container, NavBar, Logo, Links, Item, ButtonContact, Presentation, ButtonGetStarted } from './styles';

import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';

export default function Hero() {
    return (
        <Container>
            <NavBar>
                <Link to="/">
                    <Logo>
                        <img src={logo} alt="Dreammarker" />
                        <h1>Dreammarker</h1>
                    </Logo>
                </Link>
                <Links>
                    <Item><Link to="/">Home</Link></Item>       
                    <Item><Link to="/">About us</Link></Item>       
                    <Item><Link to="/">Service</Link></Item>       
                    <Item><Link to="/">Seeting</Link></Item> 
                    <Item><Link to="/"><ButtonContact>Contact us</ButtonContact></Link></Item>       
                </Links>
            </NavBar>
            <Presentation>
                <h1>Your awesome Dream maker consultant</h1>
                <p>
                    The occupational traffic permit is one of the most important things in the company 
                    when carrying out freight transport.  In fact, it is a prerequisite for 
                    doing business traffic at all. 
                </p>
                <Link to="/"><ButtonGetStarted>Get Started</ButtonGetStarted></Link>
            </Presentation>
        </Container>
    );
}
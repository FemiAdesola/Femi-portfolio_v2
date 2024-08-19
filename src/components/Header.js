import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from "react-router-dom";
import  { useState } from 'react';


const Header = () => {
  const [navbar1, setNavbar]=useState()
  const changeBackground = ()=>{
      if(window.scrollY >100){
          setNavbar(true);
      }else{
          setNavbar(false)
      }
  };
  window.addEventListener('scroll', changeBackground);

    return (
    <div className='header'>
         <div className="container2"></div>        

        <Navbar expand="lg" id="logo_nav" className={navbar1 ? 'logo_nav1': 'logo_nav'} >
            <Container >
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <div className="logo">
                    <Link to="/"><img src={require("../img/carlogo2 1.png")} alt="logo"/> </Link>
                </div>
                <Nav className="ml-auto navbar-nav">

                    <LinkContainer to="/">
                    <Nav.Link className="navbar-brand">Home</Nav.Link></LinkContainer >

                    <LinkContainer to ="projects">
                    <Nav.Link >Projects</Nav.Link></LinkContainer>
                    <LinkContainer to ="about">
                    <Nav.Link >About me</Nav.Link></LinkContainer>
                    <LinkContainer to ="skills">
                    <Nav.Link >Skills</Nav.Link></LinkContainer>

                    {/* <LinkContainer to ="gallery">
                    <Nav.Link >Gallery</Nav.Link></LinkContainer> */}
                    <LinkContainer to ="contact">
                    <Nav.Link >Contact Me</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
       </Navbar> 
        <div className="hero-banner">
            <h3>
            My interest in coding began in 2020, and I have been committed to it ever since. I have taken part in various programs to enhance my skills and knowledge. These programs have provided me with numerous resources and learning opportunities, and I feel confident that I have acquired significant skills that will help me succeed in the industry
            </h3>  
        </div>

    </div> );
};

export default Header;
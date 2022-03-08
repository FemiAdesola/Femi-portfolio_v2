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
    Welcome to explore a dedicated and result-oriented person who focuses on Mechanical Designer, software development, and Biobased processing.  
</h3>  
</div>

</div> );
};

export default Header;
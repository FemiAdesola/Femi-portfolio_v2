import React from 'react';
import {useState} from "react";
import CV from '../assests/CV.pdf';




const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled < 30){
      setVisible(false)
    }
  };
   const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (<div>
    <div className='ScrollButton' >
      <button style={{display: visible ? 'block' : 'none'}} onClick={scrollToTop}>Top</button>
      </div>
      <div className='ScrollButton2' >
      <button style={{display: visible ? 'block' : 'none'}} onClick={() => window.open(CV)}>my CV</button>

                        
      </div>

      </div>
  );
};

export default ScrollButton;
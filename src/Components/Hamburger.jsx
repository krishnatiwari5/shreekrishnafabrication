import React, {useState} from 'react'
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger({openQuote}) {

    const [showHamburger, setshowHamburger] = useState(false);

  return (
      <div className='hamburgercontain'>
      
    <ul className={showHamburger ? "hamburgerc" : "nohamburgerc"}>
        <Link className='link' to="/"  spy={true} smooth={true} offset={10} duration={500}><li>Home</li></Link>
        <Link className='link' to="atd"  spy={true} smooth={true} offset={10} duration={500}><li>About Us</li></Link>
        <Link className='link' to="services"  spy={true} smooth={true} offset={10} duration={500}><li>Services</li></Link>
       <Link className='link' to="contact"  spy={true} smooth={true} offset={10} duration={500}><li>Contact Us</li></Link>
       <a href="tel:+91-93271-20122" target="_blank"><button className="hambtn navbtn2">Call Now</button></a>
       <a href="mailto:skf.6716@gmail.com" target = "_blank"><button className='hambtn navbtn2'>Send Email</button></a>
       <a href="https://www.google.com/maps/dir//SHREE+KRISHNA+FABRICATION+surat/@21.1646594,72.7822542,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3be04fb25d2f724b:0x4e51f7a2f6924ca2!2m2!1d72.8522946!2d21.1646738" target="_blank"><button className="hambtn navbtn2">Get Direction</button></a>
       <button className="hambtn navbtn2" onClick={openQuote}>Get Quote</button>

    </ul>  
   
<div className="hamburgericon" >
<GiHamburgerMenu className="icon" onClick={() => setshowHamburger(!showHamburger)} />
</div>
    </div>
  )
}

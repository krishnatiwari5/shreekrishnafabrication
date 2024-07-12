import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'
export default function Navbar() {

 

  return (
    <div className='navbar'>
    <ul className="navd">
    <div className="link">  <Link to="/"  spy={true} smooth={true} offset={10} duration={500}><li>Home</li></Link>
    </div>  
        <div className="link">
          <Link to="atd"  spy={true} smooth={true} offset={10} duration={500}><li>About Us</li>
          </Link>
          </div>
        <div className="link"><Link to="services"  spy={true} smooth={true} offset={10} duration={500}><li>Services</li></Link></div>
        <div className="link"> <Link to="contact"  spy={true} smooth={true} offset={10} duration={500}><li>Contact Us</li></Link></div>
       
    </ul>
    
    </div>
  )
}

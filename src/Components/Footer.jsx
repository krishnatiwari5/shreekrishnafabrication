import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Footer({openQuote}) {

 


  useEffect(() => {
    Aos.init({duration : 2000, offset:10})
  }, []);



  return (
   
    <div className='footer' data-aos = "fade-right">
<div className="footerinfo">
  <div className="fcontact">
    <h2><svg
  className="w-6 h-6 phone"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  />
</svg> Contact</h2>
    <h3>9327120122</h3>
    <h3>9427120122</h3>
    <h3>02612270122</h3>
    <a href="tel:+91-93271-20122" target="_blank"><button className="callbtn">Call Now</button></a>
   
  </div>
  <div className="fmail">
    <h2><svg className="w-6 h-6 mail" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Email</h2>
    <h3>skf.6716@gmail.com</h3>
    <a href="mailto:skf.6716@gmail.com" target = "_blank"><button className='mailbtn'>Send Email</button></a>
   </div>
  <div className="fadd">
    <h2><svg
  className="w-6 h-6 location"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  />
</svg> Address</h2>
    <h3>2 J.P.Chambers B/s Khatri Nagar, Near Udhna Railway Station, Road no.0, Udhna Udhyog Nagar, Udhna, Surat, Gujarat - 394210
</h3>
<a href="https://www.google.com/maps/dir//SHREE+KRISHNA+FABRICATION+surat/@21.1646594,72.7822542,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3be04fb25d2f724b:0x4e51f7a2f6924ca2!2m2!1d72.8522946!2d21.1646738" target="_blank"><button className="directionbtn">Get Directions</button></a>
  </div>
  <div className="fohour">
    <h2><svg
  className="w-6 h-6 time"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
  
     
</svg> Opening Hours</h2>
<div className="ohs">
  <div className="">
    <h3>Monday to Saturday</h3>
    <h3>9:00 am to 8.00 pm</h3>
    
    </div>
   
    <hr  className="line"/> 
      
      <div className="">
    <h3>Sunday</h3>
    <h3>9:00 am to 5.00 pm</h3>
    </div>
    </div>
  <button className="quotebtn" onClick={openQuote}>Get Quote</button>
  </div>
</div>
<div className="copyright">
<h3>Copyright &copy; {new Date().getFullYear()} Shree Krishna Fabrication. All Rights Reserved</h3>
</div>

    </div>
  )
}

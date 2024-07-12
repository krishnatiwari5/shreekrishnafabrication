import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function About() {

  useEffect (() => {
    Aos.init({duration : 2500, offset : 10});
  }, []);
  return (
      <div className="atd" data-aos = "slide-right">
    <div className='about'>
      <div className="atitle comtitle">
        <h1>About Us</h1>
        </div>
        <div className="adetail">
   
<p>Shree Krishna Fabrication was started 15 years back with the motto to provide best quality services and products in Fabrication Industry.</p>
<p>In this high competitive market Shree Krishna Fabrication is successfully able to make a top position.</p>
<p>In 15 years of time, we have grown in every aspect of business in Fabrication industry.</p>

<p> We believe that “Strength and growth come only through continuous effort and struggle".With high determination and lots of hard work we are evolving each day. </p>
                <p>We are continuously in the process of improving our quality of our products,      services with technical excellence and Expert workers.</p>
        </div>
        </div>
    </div>
  )
}

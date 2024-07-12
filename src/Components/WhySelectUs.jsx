import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function WhySelectUs() {

    useEffect(() => {
        Aos.init({duration : 2500, offset :10})
    }, []);

  return (
    <div className='choose'>
<h1 className='ctitle comtitle' data-aos = "flip-up">Why Choose Us ?</h1>
<div className="slist">
            <div className="slc" data-aos = "fade-right">
                <div className="wcui">
                    <img src="../images/customer1.png" alt="Customer first" loading='lazy' />
                </div>
                <h3>Customer First</h3>
            </div>
            <div className="slc" data-aos = "zoom-in-down">
            <div className="wcui">
                <img src="../images/technology1.png" alt="Technology" loading='lazy' />
            </div>
                <h3>Technology</h3>
            </div>
            <div className="slc" data-aos = "zoom-in-up">
            <div className="wcui">
                <img src="../images/delivery1.png" alt="On time delivery" loading='lazy' />
            </div>
                <h3 className= "ontime">On Time Delivery</h3>
            </div>
            <div className="slc" data-aos = "fade-left">
            <div className="wcui">
                <img src="../images/experience1.png" alt="Experience" loading='lazy' />
            </div>
                <h3>Experience</h3>
            </div>
        </div>
    </div>
  )
}

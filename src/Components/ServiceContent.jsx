import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function ServiceContent() {

    useEffect (() => {
        Aos.init({duration : 2500, offset : 100, delay :500 });
      }, []);

  return (
    <div className='sdetail' data-aos= "zoom-in-up">
        <div className="item 1" data-aos= "fade-right"  >
        <img src="../images/gate3.jpg" alt="gate" loading='lazy' />
    <h3>Gate</h3>
        </div>
        <div className="item" data-aos= "fade-up"  >
        <img src="../images/window6.png" alt="window" loading='lazy' />
    <h3>Window</h3>
        </div>
        <div className="item" data-aos= "fade-left"  >
        <img src="../images/bed2.jpg" alt="bed" loading='lazy' />
    <h3>Bed</h3>
        </div>
        <div className="item" data-aos= "fade-right">   
    <img src="../images/gazebo3.jpg" alt="gazebo" loading='lazy' />
    <h3>Gazebo</h3>
        </div>
        <div className="item" data-aos= "fade-up">
        <img src="../images/shed2.jpg" alt="shed" loading='lazy' />
    <h3>Shed</h3>
        </div>
        <div className="item" data-aos= "fade-left">
        <img src="../images/railing1.jpg" alt="railing" loading='lazy' />
    <h3>Railing</h3>
        </div>
        <div className="item" data-aos= "fade-right">
    <img src="../images/shutter2.jpg" alt="shutter" loading='lazy' />
    <h3>Shutter</h3>
        </div>
        <div className="item" data-aos= "fade-up">
        <img src="../images/fen6.jpg" alt="fencing" loading='lazy' />
    <h3>Fencing</h3>
        </div>
        <div className="item nine" data-aos= "fade-left">
        <img src="../images/fen4.jpg" alt="wire fencing" loading='lazy' />
    <h3>Wire Fencing</h3>
        </div>
  

    </div>
     
  )
}

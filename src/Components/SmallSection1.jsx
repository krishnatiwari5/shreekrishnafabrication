import React, { useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function SmallSection1() {

    useEffect(() => {
      Aos.init({duration:2000, offset:10})
    }, [])
   return (
<div className="bari" data-aos = 'zoom-in' data-aos-delay ='1500'>
  <img src="../images/growth.png" alt="growth" loading='lazy' />
  <h1>Exponetial</h1>
    <h2>Growth</h2>
    </div>
   )

   }
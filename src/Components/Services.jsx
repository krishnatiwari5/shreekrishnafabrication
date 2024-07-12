import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ServiceContent from './ServiceContent'

export default function Services() {

  useEffect (() => {
    Aos.init({duration : 2000, offset : 100});
  }, []);

  return (
    <div className='services' >
   <h1 className='title comtitle' data-aos= "flip-up">Services</h1>
   <ServiceContent  />
   <h3 className = 'workdone' data-aos = 'fade-right' data-aos-offset ='50' >
   We manufacture all types of Grill, Gates, Windows, Dadar, Parking shed, Roofing shed, Industrial shed, Ornamental grill, Shutter, Collapsible gate, Bed, Fencing, Kata-Tar Fencing and All metal M.S. and S.S. Fabrication works on labour and materials.
   </h3>
   </div>
   
  )
}

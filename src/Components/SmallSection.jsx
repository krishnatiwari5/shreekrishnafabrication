import React, { useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import SmallSection2 from './SmallSection2';
import SmallSection3 from './SmallSection3';
import SmallSection4 from './SmallSection4';
import SmallSection1 from './SmallSection1';

export default function SmallSection() {

  useEffect(() => {
    Aos.init({duration:2000, offset:10})
  }, [])
 
 
  return (
    
    <div className='bar' data-aos = 'slide-right'>
<SmallSection1/>
    <SmallSection2/>
    <SmallSection3/>
    <SmallSection4/>
</div>






  )
}

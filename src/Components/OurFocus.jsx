import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function OurFocus() {

useEffect(() => {
    Aos.init({duration:2500, offset:10})
}, []);

  return (
    <div className='focus'>
        <h1 className='ftitle comtitle' data-aos ="flip-right">Our Focus</h1>
        <div className="flist">
            <div className="flc"  data-aos = "flip-right" >
            <div className="wcui">
                <img src="../images/worker1.png" alt="Workers" loading='lazy'/>
            </div>
            <h3>Experts Only</h3>
            </div>
            <div className="flc" data-aos = "flip-right" >
            <div className="wcui">
                <img src="../images/quality2.png" alt="Quality" loading='lazy'/>
            </div>
                <h3>Quality</h3>
            </div>
            <div className="flc" data-aos = "flip-right" >
            <div className="wcui">
                <img src="../images/creativity2.png" alt="Creativity" loading='lazy'/>
            </div>
                <h3>Creativity</h3>
            </div>
        </div>
    </div>
  )
}

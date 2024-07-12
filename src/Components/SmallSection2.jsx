import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function SmallSection2() {

  useEffect(() => {
    Aos.init({duration:2000, offset:300})
  }, [])

  const [counterOn, setCounterOn] = useState(false);
  return (
<div className="ss">
    <ScrollTrigger onEnter={() => setCounterOn(true)}  onExit={() => setCounterOn(false)}>
<div className="bari" data-aos = 'zoom-in' data-aos-delay ='1500'>
  <img src="../images/people1.png" alt="customers" loading='lazy' />
  <h1>
    { counterOn && <CountUp start = {0} end = {5000} duration = {2.5} delay={2.5} suffix = '+' />}
  </h1>
  <h2>Satisfied Customers</h2>
</div>
</ScrollTrigger >
</div>
)
}
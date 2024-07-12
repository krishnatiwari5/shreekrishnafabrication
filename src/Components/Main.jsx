import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from "framer-motion"
import Introline from './Introline'

export default function Main() {


  return (
    <div className='main'>
      <Introline/>
      
        <div className="info" >
        <motion.div className="intro" initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.7 ,delay :0}} >
       <img src="../images/main.png" alt="Shree Krishna" className='logo' />
       </motion.div>
        <motion.div className="name" initial = {{translateX : 500, opacity : 0}} animate = {{translateX : 0, opacity:1}} transition={{duration:1.7, delay:0}} >
       <h1>SHREE KRISHNA FABRICATION</h1>
        </motion.div>
        
       </div>
       <div className="dummy"></div>
        <div className="dummy"></div>
        <div className="dummy"></div>
    </div>
  )
}

import React from 'react'
import TypewriterComponent from 'typewriter-effect'
export default function Introline() {
  return (
    <div className='introline'>
        <h2 className= 'typewriter'>
<TypewriterComponent
  options={{
    strings: ["Welcome to", "आपका स्वागत है", "તમારું સ્વાગત છે" ],
    autoStart: true,
    loop: true,
  }}
/></h2>
<h2>Best Fabrication Shop in Surat</h2>


    </div>
  )
}

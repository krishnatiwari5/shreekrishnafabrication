import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {

useEffect(() => {
  Aos.init({duration : 2000, offset : 100})
})

  return (
    <div className='contact' data-aos = "zoom-in-right">
<h1 className='getit comtitle' data-aos = "flip-down">Get in Touch</h1>
<form action="" className="form" data-aos = "fade-up-left">
    <input type="text" required placeholder='Your Name'/>
    <input type="email" required placeholder='Your Email' />
    <input type="tel" required placeholder='Your Contact number' pattern="[0-9]{10}" maxLength={12} />
    <textarea name="" id="" cols="20" rows="5" required placeholder='Your Message'></textarea>
    <button>Send Message</button>
</form>
    </div>
  )
}

import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

export default function Testimonials() {

  useEffect(()=> {
   Aos.init({duration : 2000, offset : 200, delay : 500})
  }, [])

  return (
    <div className='testimonials'>
        <h1 className='ttitle comtitle' data-aos = "flip-up">Testimonials</h1>
         <Swiper data-aos = "zoom-in"
       cssMode={true}
       navigation={true}
      autoplay = {{delay : 3000, disableOnInteraction : true}}
       pagination={{clickable : true}}
       mousewheel={true}
  
       keyboard={true}
       modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
       className="mySwiper swiper "
    >
        
      <SwiperSlide className = 'sslide swiper-slide'>
        <div className="scontent">
        <h2 className='tname'>Saurav Desai</h2>
        <p>I am a regular customer of Shree Krishna Fabrication and I must say this is the best shop in Surat</p> 
        </div>
        </SwiperSlide>
      <SwiperSlide className = 'sslide'  data-swiper-autoplay="2000">
        <div className="scontent">
        <h2 className='tname'>Ramesh Patel</h2>
        <p>What a finishing they have in their Service, Well Done! Shree Krishna Fabrication</p> 
        </div>
        </SwiperSlide>
      <SwiperSlide className = 'sslide'  data-swiper-autoplay="2000">
        <div className="scontent">
        <h2 className='tname'>Adarsh Mistry</h2>
        <p>Most Trusted Shop in Surat City,they done all the orders so fast and provides On time delivery</p> 
        </div>
        </SwiperSlide>
      <SwiperSlide className = 'sslide'>
        <div className="scontent">
        <h2 className='tname'>Nitesh Gwalani</h2>
        <p>This is my first time to Shree Krishna Fabrication and i am impressed how they make my garden's Gazebo Fabulous!, Truely this is Best Shop for Fabrication works in Surat</p> 
        </div>
        </SwiperSlide>
      <SwiperSlide className = 'sslide'>
        <div className="scontent">
        <h2 className='tname'>Krishna Tiwari</h2>
        <p>i am very glad how shree krishna fabrication respect their customer and customize the thing on customer's direction</p> 
        </div>
        </SwiperSlide>
      <SwiperSlide className = 'sslide'>
        <div className="scontent">
        <h2 className='tname'>Rahul Barot</h2>
        <p>Very happy, i ordered gate for home and it's awesome</p> 
        </div>
        </SwiperSlide>
      <SwiperSlide className = 'sslide'>
        <div className="scontent">
        <h2 className='tname'>Sameer Patil</h2>
        <p>
શ્રી કૃષ્ણ ફેબ્રિકેશન સુરતની સૌથી વિશ્વસનીય અને પ્રામાણિક દુકાન છે</p> 
        </div>
        </SwiperSlide>
        <SwiperSlide className = 'sslide'>
        <div className="scontent">
        <h2 className='tname'>Jayshree Tiwari</h2>
        <p>i done fencing around my home and very satisfy how shree krishna fabrication done it , Thank you SkF</p> 
        </div>
        </SwiperSlide>
        <SwiperSlide className = 'sslide'>
        <div className="scontent">
        <h2 className='tname'>Pawan Pandey</h2>
        <p>Creativity, on time delivery, trusthworthy Shree Krishna Fabrication is Best</p> 
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

import React, {useState} from 'react'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import OurFocus from './Components/OurFocus'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Footer  from './Components/Footer'
import WhySelectUs from './Components/WhySelectUs'
import Hamburger from './Components/Hamburger'
import SmallSection from './Components/SmallSection'
import { Helmet } from 'react-helmet'
import Modal from "react-modal"
import QuoteForm from './Components/QuoteForm'
import WhatAppIcon from './Components/WhatAppIcon'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root')
  return (
    <div>
      <Helmet>
        <title>SHREE KRISHNA FABRICATION</title>
        <meta
      name="description"
      content="Shree Krishna Fabrication has been the best metal fabrication shop in Udhna, Surat for the last 15 years. We manufacture all types of Grill, Gates, Windows, Dadar, Parking shed, Roofing shed, Industrial shed, Ornamental grill, Shutter, Collapsible gate, Bed, Fencing, Kata-Tar Fencing and All metal M.S. and S.S. Fabrication works on labour and materials. Metal Fabricator in Udhna Surat"
    />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="canonical" href="https://shreekrishnafabrication.in/"></link>
      </Helmet>
     
      <Modal
      isOpen = {isOpen}
      style = {customStyles}
      >
        <QuoteForm open = {isOpen} close = {() => setIsOpen(false)} />
      </Modal>
      <Navbar/>
      <Hamburger openQuote ={() => setIsOpen(true)}/>
     
      <Main/>
      <WhatAppIcon/>
      <About/>
      <Services/>
      <OurFocus/>
      <SmallSection/>
      <Testimonials/>
      <WhySelectUs/>
      <Contact/>
      
      <Footer openQuote ={() => setIsOpen(true)}/>
    </div>
  )
}

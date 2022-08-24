import React from 'react'
import { FiArrowUp } from 'react-icons/fi'
import '../css/Common.css'
import SectionInformations from './SectionInformations'

const StartDisplay = () => {
   return (
      <section className="start">

         <SectionInformations 
            icon={ <FiArrowUp /> } 
            h1='Enter a city name' 
            h2='To get informations about weather' 
         />

      </section>
   )
}

export default StartDisplay
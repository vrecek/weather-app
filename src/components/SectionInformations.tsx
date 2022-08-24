import React from 'react'
import { Informations } from '../interfaces/IndexInterfaces'

const SectionInformations = ({ icon, h1, h2 }: Informations) => {
   return (
      <>
      
         <span className='info-icon'>{ icon }</span>
         <h1 className='info-h1'>{ h1 }</h1>
         <h2 className='info-h2'>{ h2 }</h2>

      </>
   ) 
}

export default SectionInformations
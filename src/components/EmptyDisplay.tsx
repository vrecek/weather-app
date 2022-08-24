import React from 'react'
import '../css/EmptyDisplay.css'
import '../css/Common.css'
import { TbMoodEmpty } from 'react-icons/tb'
import { EmptyType } from '../interfaces/IndexInterfaces'
import SectionInformations from './SectionInformations'
import LastSearched from './LastSearched'

const EmptyDisplay = ({ query }: EmptyType) => {
   return (
      <section className="empty">

         <SectionInformations 
            icon={ <TbMoodEmpty /> } 
            h1='No results found for:' 
            h2={ query }
         />

         <LastSearched />

      </section>
   )
}

export default EmptyDisplay
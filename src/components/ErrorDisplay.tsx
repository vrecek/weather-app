import React from 'react'
import '../css/Common.css'
import '../css/ErrorDisplay.css'
import { ErrorType } from '../interfaces/IndexInterfaces'
import { MdNearbyError } from 'react-icons/md'
import SectionInformations from './SectionInformations'

const ErrorDisplay = ({ message }: ErrorType) => {
   return (
      <section className="error">

         <SectionInformations
            icon={ <MdNearbyError /> }
            h1='An error has occured!'
            h2={ message }
         />

         <h3>Please try again</h3>

      </section>
   )
}

export default ErrorDisplay
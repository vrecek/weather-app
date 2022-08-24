import React from 'react'
import { WeatherProps } from '../../interfaces/IndexInterfaces'
import Information from '../Information'
import Status from './Status'

const CityInfo = ({ details }: WeatherProps) => {
   return (
      <article className="city-info">

         <Status weatherStatus={ details.weather } />

         <Information name='Country' value={ details.country } />
         <Information name='Country code' value={ details.countryCode } />
         <Information name='Exact location' value={ details.exactLocation } />
         <Information name='Rain' value={`${ details.rain }mm`} />
         <Information name='Snow' value={`${ details.snow }mm`} />

      </article>
   )
}

export default CityInfo
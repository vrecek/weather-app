import React from 'react'
import Weather from '../../functions/Weather'
import { TemperatureType } from '../../interfaces/WeatherSectionInterfaces'

const Temperature = ({ temp, city }: TemperatureType) => {
   const w: Weather = new Weather('')

   const CELSIUS: number = w.kelvinToCelsius(temp)
   const FAHRENHEIT: number = w.kelvinToFahrenheit(temp)
   const KELVIN: number = parseFloat(temp.toFixed(1))

   return (
      <section className="temperature">

         <h4 className='city'>{ city }, </h4>
         <h2 className='celsius'>{ CELSIUS }°C</h2>
         <div>
            <h6>{ KELVIN }°K</h6>
            <h6>{ FAHRENHEIT }°F</h6>
         </div>

      </section>
   )
}

export default Temperature
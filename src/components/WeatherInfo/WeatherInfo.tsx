import React from 'react'
import Weather from '../../functions/Weather';
import { WeatherProps } from '../../interfaces/IndexInterfaces'
import Information from '../Information';
import Temperature from './Temperature'

const WeatherInfo = ({ details }: WeatherProps) => {
   const w: Weather = new Weather('')

   const MIN = `${ w.kelvinToCelsius(details.temperature.min) }°C | ${ details.temperature.min }°K | ${ w.kelvinToFahrenheit(details.temperature.min) }°F`
   const MAX = `${ w.kelvinToCelsius(details.temperature.max) }°C | ${ details.temperature.max }°K | ${ w.kelvinToFahrenheit(details.temperature.max) }°F`

   return (
      <article className="weather-info">

         <Temperature city={ details.city } temp={ details.temperature.current } />

         <Information cname='temp' name='Min. temperature' value={ MIN } />
         <Information cname='temp' name='Max. temperature' value={ MAX } />
         <Information name='Clouds' value={`${ details.clouds }%`} />
         <Information name='Humidity' value={`${ details.humidity }%`} />
         <Information name='Wind' value={`${ details.windSpeed }m/s`} />

      </article>
   )
}

export default WeatherInfo
import React from 'react'
import { BsFillCloudHaze2Fill, BsFillCloudRainFill, BsFillSunFill, BsSnow } from 'react-icons/bs'
import { AiFillCloud, AiFillQuestionCircle } from 'react-icons/ai'
import { IoThunderstorm } from 'react-icons/io5'
import { StatusInfo } from '../../interfaces/CitySectionInterfaces'

const Status = ({ weatherStatus }: StatusInfo) => {
   let icon: JSX.Element

   switch(weatherStatus) {
      case 'Rain': icon = <BsFillCloudRainFill />; break;
      case 'Clear': icon = <BsFillSunFill />; break;
      case 'Snow': icon = <BsSnow />; break;
      case 'Clouds': icon = <AiFillCloud />; break;
      case 'Haze': case 'Mist': icon = <BsFillCloudHaze2Fill />; break;
      case 'Thunderstorm': icon = <IoThunderstorm />; break;
      default: icon = <AiFillQuestionCircle />
   }

   return (
      <section className="status">

         <span className='icon'>{ icon }</span>
         <h5 className='status'>{ weatherStatus }</h5>

      </section>
   )
}

export default Status
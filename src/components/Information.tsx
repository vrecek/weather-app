import React from 'react'
import { InformationType } from '../interfaces/IndexInterfaces'

const Information = ({ name, value, cname }: InformationType) => {
   return (
      <div className={`info ${ cname ?? '' }`}>

         <h4 className="info">{ name }</h4>
         <h4 className="value">{ value }</h4>

      </div>
   )
}

export default Information
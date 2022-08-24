import React from 'react'
import { Background } from '../interfaces/IndexInterfaces'

const BackgroundImage = ({ source }: Background) => {
   return (
      <figure className="background">

         <img src={ source } alt='background' />

      </figure>
   )
}

export default BackgroundImage
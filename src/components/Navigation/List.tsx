import React from 'react'
import { NavigateLink } from '../../interfaces/IndexInterfaces'

const List = () => {
   const redirect = (to: string) => window.open(to, '_blank')

   const links: NavigateLink[] = [
      { url: 'https://github.com/vrecek', text: 'Contact' }
   ]

   return (
      <ul>

         {
            links.map((x, i) => (
               <li key={ i } onClick={ () => redirect(x.url) }>
                  { x.text }
               </li>
            ))
         }

      </ul>
   )
}

export default List
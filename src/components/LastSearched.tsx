import React from 'react'
import Weather from '../functions/Weather'

const LastSearched = () => {
   return (
      <section className="last-searched">

         <h6>Last searched</h6>

         <ul>
            {
               new Weather('').getCookieArray('lastsearched').map((x, i) => (
                  <li key={ i }>
                     { x }
                  </li>
               ))
            }
         </ul>

      </section>
   )
}

export default LastSearched
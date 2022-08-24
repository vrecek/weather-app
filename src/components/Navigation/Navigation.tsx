import React from 'react'
import { InfoState } from '../../interfaces/IndexInterfaces'
import List from './List'
import Search from './Search'

const Navigation = ({ state, weather }: InfoState) => {
   return (
      <nav className="navigation">

         <h1>Weather app</h1>

         <Search weather={ weather } state={ state } />

         <List />

      </nav>
   )
}

export default Navigation
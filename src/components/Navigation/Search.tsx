import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { InfoState, WeatherInformations } from '../../interfaces/IndexInterfaces'
import defImage from '../../images/defaultImage.jpg'
import { LoadingCss } from '../../functions/Loading'

const Search = ({ state, weather }: InfoState) => {
   const clearInput = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const input: HTMLInputElement = t.parentElement!.children[1] as HTMLInputElement

      input.value = ''
   }

   const toggleDelIcon = (input: HTMLInputElement, key: string): void => {
      const addLen: number = 
      key === 'Backspace' ? -1 
      : 
      key !== 'enter' ? 1 : 0

      const len: number = input.value.length + addLen
      const icon: HTMLElement = input.parentElement!.children[2] as HTMLElement

      if(len > 0) {
         icon.style.opacity = '1'
         icon.style.pointerEvents = 'all'

         return
      }

      icon.style.opacity = '0'
      icon.style.pointerEvents = 'none'
   }

   const searchCity = async (e: React.KeyboardEvent): Promise<void> => {
      const t = e.target as HTMLInputElement
      const { key } = e
      const { value } = t

      toggleDelIcon(t, key)

      if(key === 'Enter' && value.length >= 3) {
         const finalObject = {
            query: value,
            start: false
         }

         const l: LoadingCss = new LoadingCss()
         l.defaultStyleDots()
         l.append(document.body)

         try {
            const data = await weather.getWeather(value)
            const { theme, image } = weather.selectInformations(data?.weather)

            Object.assign(finalObject, {
               details: data,
               theme,
               error: null,
               image
            })

            if(data) weather.setCookieArray(value)

         }catch(err: any) {
            Object.assign(finalObject, {
               details: null,
               theme: 'light',
               error: err?.message ?? err,
               image: defImage
            })

         }finally { 
            l.remove()
            state(finalObject as WeatherInformations) 
         }
      }
   }

   return (
      <section className="search">

         <span className='search-icon'><BiSearch /></span>

         <input onKeyDown={ searchCity } type="text" spellCheck='false' />
         
         <span onClick={ clearInput } className='del-icon'>
            <FaTimes />
         </span>

      </section>
   )
}

export default Search
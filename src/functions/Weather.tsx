import Cookies from "universal-cookie"

import cloud from '../images/cloud.jpg'
import rain from '../images/rain.jpg'
import mist from '../images/mist.jpg'
import snow from '../images/snow.jpg'
import sun from '../images/sun.jpg'
import storm from '../images/storm.jpg'
import defImage from '../images/defaultImage.jpg'

export type Themes = 'light' | 'dark'
export type Weathers = 'Clouds' | 'Mist' | 'Rain' | 'Snow' | 'Haze' | 'Clear' | 'Thunderstorm'
export interface SelectInfo {
   theme: Themes,
   image: string
}
export interface WeatherReturn {
   city: string,
   countryCode: string,
   country: string,
   exactLocation: string,
   clouds: number,
   temperature: {
      current: number,
      min: number,
      max: number,
   },
   weather: Weathers,
   windSpeed: number,
   humidity: number,
   rain: number,
   snow: number
}

export default class Weather {
   private apiKey: string
   
   public constructor(apiKey: string) {
      this.apiKey = apiKey
   }

   public getCookieArray(val: string): string[] {
      return new Cookies().get(val) ?? []
   }

   public setCookieArray(val: string): void {
      const cookie: Cookies = new Cookies()
      const previous: string[] = cookie.get('lastsearched') ?? []

      if(previous.includes(val)) return

      if(previous.length > 10) {
         previous.shift()
      }
      
      new Cookies().set('lastsearched', [...previous, val], {
         maxAge: 1000 * 60 * 60 * 24 * 30
      })
   }

   public kelvinToCelsius(kelvin: number): number {
      return parseFloat( (kelvin - 273.15).toFixed(1) )
   }

   public kelvinToFahrenheit(kelvin: number): number {
      return parseFloat( (1.8 * (kelvin - 273) + 32).toFixed(1) )
   }

   public selectInformations (weatherStatus?: Weathers): SelectInfo {
      let theme: Themes
      let image: string

      switch(weatherStatus) {
         case 'Clouds': case 'Rain': case 'Mist': case 'Haze': case 'Thunderstorm':
            theme = 'light'
         break;

         case 'Snow': case 'Clear':
            theme = 'dark'; 
         break;

         default: theme = 'light'
      }

      switch(weatherStatus) {
         case 'Clouds': image = cloud; break;
         case 'Rain': image = rain; break;
         case 'Snow': image = snow; break;
         case 'Haze': case 'Mist': image = mist; break;
         case 'Clear': image = sun; break;
         case 'Thunderstorm': image = storm; break;

         default: image = defImage
      }

      return { theme, image }
   }

   public async getWeatherCoords(lat: number, lon: number): Promise<any> {
      const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ this.apiKey }`)
      const data2 = await res2.json()

      return this.getWeather(data2.name)
   }

   public async getWeather(city: string): Promise<WeatherReturn | null> {
      const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ city }&limit=1&appid=${ this.apiKey }`)
      const data = await res.json()

      if(!data.length || !city) return null

      const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ data[0].lat }&lon=${ data[0].lon }&appid=${ this.apiKey }`)
      const data2 = await res2.json()
      
      return {
         city: data[0].name,
         countryCode: data[0].country,
         country: new Intl.DisplayNames(['en'], { type: 'region' }).of(data[0].country) ?? '???',
         exactLocation: data2.name,
         clouds: data2.clouds.all,
         temperature: {
            current: data2.main.temp,
            min: data2.main.temp_min,
            max: data2.main.temp_max
         },
         windSpeed: data2.wind.speed,
         humidity: data2.main.humidity,
         weather: data2.weather[0].main,
         rain: data2?.rain?.['1h'] ?? 0,
         snow: data2?.snow?.['1h'] ?? 0
      }
   }
}
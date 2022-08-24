import Weather, { Themes, WeatherReturn } from "../functions/Weather"
import start from '../images/defaultImage.jpg'

export interface Background {
   source: string
}

export interface NavigateLink {
   url: string,
   text: string
}

export interface WeatherInformations {
   query: string,
   theme: Themes,
   details: WeatherReturn | null,
   error: any | null,
   image: string,
   start: boolean
}

export const DEFAULT = {
   query: '',
   theme: 'light' as Themes,
   details: null,
   error: null,
   image: start,
   start: true
}

export interface InfoState {
   state: React.Dispatch<React.SetStateAction<WeatherInformations>>,
   weather: Weather
}

export interface EmptyType {
   query: string
}

export interface ErrorType extends EmptyType {
   message: string
}

export interface Informations {
   h1: string,
   h2: string,
   icon: JSX.Element
}

export interface WeatherProps {
   details: WeatherReturn
}

export interface InformationType {
   name: string,
   value: string | number,
   cname?: string
}
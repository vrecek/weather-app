import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import CityInfo from './components/CityInfo/CityInfo';
import EmptyDisplay from './components/EmptyDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import Navigation from './components/Navigation/Navigation';
import StartDisplay from './components/StartDisplay';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import './css/index.css';
import { LoadingCss } from './functions/Loading';
import defImage from './images/defaultImage.jpg'
import Weather from './functions/Weather';
import { DEFAULT, WeatherInformations } from './interfaces/IndexInterfaces';

function App() {
   const [informations, setInfo] = React.useState<WeatherInformations>(DEFAULT)
   const [weather, _] = React.useState<Weather>(new Weather(process.env.REACT_APP_WEATHER_API_KEY!))

   React.useEffect(() => {
      const successLocation = async (pos: GeolocationPosition) => {
         const finalObject = {
            query: "Location detect",
            start: false
         }
   
         const l: LoadingCss = new LoadingCss()
         l.defaultStyleDots()
         l.append(document.body)
   
         try {
            const data = await weather.getWeatherCoords(pos.coords.latitude, pos.coords.longitude)
            const { theme, image } = weather.selectInformations(data?.weather)
            console.log( new Date().toLocaleTimeString('PL', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }) )

            Object.assign(finalObject, {
               details: data,
               theme,
               error: null,
               image
            })
   
         }catch(err: any) {
            Object.assign(finalObject, {
               details: null,
               theme: 'light',
               error: err?.message ?? err,
               image: defImage
            })
   
         }finally { 
            l.remove()
            setInfo(finalObject as WeatherInformations) 
         }
      }
   
      navigator.geolocation.getCurrentPosition(successLocation)
   }, [])

   const display = (): JSX.Element => {
      if(informations.start) return <StartDisplay />

      if(informations?.error) {
         const { error, query } = informations
         return <ErrorDisplay message={ error } query={ query } />
      }

      if(!informations.details) {
         return <EmptyDisplay query={ informations.query } />
      }

      return (
         <>
            <WeatherInfo details={ informations.details }/>
            <CityInfo details={ informations.details } />
         </>
      )
   }

   
   return (
      <div className={ `App ${ informations.theme }` }>
         
         <BackgroundImage source={ informations.image } />

         <Navigation weather={ weather } state={ setInfo } />

         <div className="wrap">

            { display() }

         </div>

      </div>
   )
}

export default App;

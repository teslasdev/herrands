import React from 'react'
import './Home.css'
import Header from '../Components/Header';
import '../Responsive/Mobile.css'
import { useState , useEffect } from 'react';
import {useMediaQuery} from 'react-responsive'
import Mobile from '../Components/Mobile';
import Desktop from '../Components/Desktop';

const Home = () => {
  const[someText ,setText] = useState('Good Morning!');
  const current = new Date();
  // By default US English uses 12hr time with AM/PM
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
  });

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 544px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  const defaultAfternoon = '12 PM';
  const defaultEvening = '01 PM';
  useEffect(() => {
    if(time === '12 PM' || time === '01 PM' || time === '02 PM' || time === '03 PM') {
      setText('Good Afternoon!');
    } else if(time === '04 PM' || time === '05 PM' || time === '06 PM' || time === '07 PM' || time === '08 PM' || time === '09 PM' || time === '10 PM' || time === '11 PM') {
      setText('Good Evening!');
    }
  }) 
  return (
    <div className='App'>
      <div>
        {isPortrait ? <Mobile /> :
        <>
          <Header  text={someText}/>
          <Desktop />
        </> 
        }
      </div>
    </div>
  )
}

export default Home
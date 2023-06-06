import React from 'react'
import './Home.css'
import Header from '../Components/Header';
import '../Responsive/Mobile.css'
import { useState , useEffect } from 'react';
import {useMediaQuery} from 'react-responsive'
import Mobile from '../Components/Mobile';
import Desktop from '../Components/Desktop';
import logo from '../Images/iconsvg.svg'

const Home = () => {
  const[someText ,setText] = useState('Good Morning!');
  const [onScreen, setScreen]= useState(true)
  const current = new Date();
  // By default US English uses 12hr time with AM/PM
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
  });


  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  
  setTimeout(() => {
    setScreen(false)
  }, 2000)
  


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
      {onScreen ? 
          <div className='fixed left-0 top-0 bg-white w-full h-screen flex justify-center items-center'>
            <div className='animate w-[150px] h-[150px]'>
              <img src={logo} alt="" className='w-full h-full '/>
            </div>
          </div>
      :
      <div>
        {isPortrait ? <Mobile /> :
        <>
          <>
          <Header  text={someText}/>
          <Desktop />
          </>
        </> 
        }
      </div>
      }
    </div>
  )
}

export default Home
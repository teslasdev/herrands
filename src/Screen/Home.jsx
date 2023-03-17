import React from 'react'
import './Home.css'
import Header from '../Components/Header';
import Body from '../Components/Body';
import '../Responsive/Mobile.css'
import { useState , useEffect } from 'react';

const Home = () => {
  const[someText ,setText] = useState('Good Morning!');
  const current = new Date();
  // By default US English uses 12hr time with AM/PM
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
  });


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
        <Header  text={someText}/>
        <Body/>
      </div>
    </div>
  )
}

export default Home
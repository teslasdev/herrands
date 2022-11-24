import React from 'react'
import './Home.css'
import Header from '../Components/Header';
import Body from '../Components/Body';
import '../Responsive/Mobile.css'
import imageWhite from '../Images/Herrands white BG 1.png';
import imageBlack from '../Images/HerrandsBlack.png';
import { useState , useEffect } from 'react';

const Home = () => {
  const[someText ,setText] = useState('Good Morning!');
  const[LayoutColor ,setLayoutColor] = useState('bg-layout-grey');
  const[Logo ,setLogo] = useState(imageWhite);
  const[btnColor ,setBtnColor] = useState('');
  const current = new Date();
  // By default US English uses 12hr time with AM/PM
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
  });


  const defaultAfternoon = '12 PM';
  const defaultEvening = '01 PM';
  useEffect(() => {
    if(time === defaultAfternoon) {
      setText('Good Afternoon!');
      setLayoutColor('bg-layout-white')
    } else if(time === defaultEvening) {
      setText('Good Evening!');
      setLayoutColor('bg-layout-black')
      setLogo(imageBlack)
      setBtnColor('hrd-white')
    }
  }) 
  return (
    <div className='App'>
      <div className={LayoutColor}>
        <Header logo={Logo}  text={someText}/>
        <Body colorBg={btnColor}/>
      </div>
    </div>
  )
}

export default Home
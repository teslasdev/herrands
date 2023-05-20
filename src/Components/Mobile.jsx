import React from 'react'
import './Mobile.css'
import AOS from 'aos'
import logo from '../Images/Herrands favicon blue.png'
import { Link } from 'react-router-dom'
import {BsFillTelephoneFill,BsEnvelope} from 'react-icons/bs'



const Mobile = (props) => {
  AOS.init();
  return (
    <div>
        <div className='hdm-hshja'>
            <div className='hdm-logo'>
                <img src={logo} alt="" />
            </div>

            <div className="hdm-sakk">
                
                <div className="hdm-shwhh">
                    <div className="hdm-ahah">
                        <h3>Don't carry it all alone!</h3>
                        <p>Connect with thousands of people who are eager to share their time with you and help you achieve your goals</p>
                    </div>
                    <div className="">
                        <a href='tel:+2347044184306' style={{color :'#fff'}} className='hd-gjsj'>
                            <span className='hd-skakka'><BsFillTelephoneFill size={15}/></span>
                        </a>

                        <a href='mailto:Send@herrands.com' style={{color :'#fff'}} className='hd-gjsj'>
                            <span className='hd-skakka'><BsEnvelope size={15}/></span>
                        </a>
                    </div>
                </div>
                <div className='hdm-dhsah'>
                    <Link to='/onsite' className='hrdm-btn hrdm-btn-1'>On Site</Link>
                    <Link to='/virtual' className='hrdm-btn hrdm-btn-2'>Virtual</Link>
                </div>
            </div>

            <div style={{color:'white',textAlign:'center', width:'100%', fontFamily:'Montserrat',zIndex:20,position:'absolute', bottom: 15}}>By continuing, <Link to='/terms-of-service' style={{color:'#0066F5'}}>terms of service</Link> and <Link to='/privacy-policy' style={{color:'#0066F5'}}> privacy policy</Link> apply</div>
            <div className='hdm-sjaj' />
            
        </div>
    </div>
  )
}

export default Mobile
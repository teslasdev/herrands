import React from 'react'
import './Body.css'
import AOS from 'aos'
import {Link} from 'react-router-dom'
import person from '../Images/person.png'


const Body = (props) => {
  AOS.init();
  return (
    <div>
        <div className="hrd-body">
            <div className='hrd-bg'>
                <div className="hrd-box">
                   <h1 style={{fontSize:45, letterSpacing: 3}} className="hrd-header-mobile">Run the herrands that steal your time away!</h1>
                   <p style={{width : '65%', fontSize:16, lineHeight : 2, fontWeight: '500'}} className="hrd-primary-mobile">We help business owners, entrepreneurs, managers, office workers, techies, and individuals with tight schedules save a minimum of  1 hour weekly to free up more time and get more done.</p>
                   <h1 className="hrd-tertiary-mobile" style={{width : '63%'}}>What type of herrands are you running today?</h1>
                </div>
            </div>

            <div className='hrd-person'>
                <img src={person} alt="" style={{height:'100%'}}/>
            </div>

            <div className="hrd-3iiks">
               <div className='hrd-dsosl'>
                    <div className="button">
                        <Link to='/onsite' className='hrd-btn' style={{background :'#26344f' , color: '#fff'}}>On Site</Link>
                        <Link to='/virtual' className='hrd-btn' style={{color :'#26344f' , border : '1px solid #26344f'}}>Virtual</Link>
                    </div>

                    <h3 style={{color :'#26344f', fontSize : 22, fontWeight:'700' }} className="hrd-secondary-mobile">In too much of a hurry to fill out a form?</h3>
                    <div style={{color :'#26344f', fontSize: 16,display: 'flex' , justifyContent: 'space-between'}} className="hrd-padding">
                        <div className='hrd-secondary-mobile'>
                            <h3>Give us a call 📞</h3>
                            <a href='tel:+2347044184306' style={{color :'#26344f'}}>+234 704 418 4306</a>
                        </div>

                        <div className='hrd-secondary-mobile'>
                            <h3>Send us an email 📩</h3>
                            <a href='mailto:Send@herrands.com' style={{color :'#26344f'}}>Send@herrands.com</a>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Body
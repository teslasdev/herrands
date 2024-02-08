import React from 'react'
import './Body.css'
import AOS from 'aos'
import {Link} from 'react-router-dom'
import {BsFillTelephoneFill,BsEnvelope} from 'react-icons/bs'


const Desktop = (props) => {
  AOS.init();
  return (
    <div>
        <div className='hd-sajdj'>
            <div className='hd-gds' style={{position:'relative'}}>
                {""}
                <div style={{color:'white',textAlign:'center', width:'100%', fontFamily:'Montserrat',zIndex:20,fontSize:'16px',position:'absolute',bottom:'2%'}}>By continuing, <Link to='/terms-of-service' style={{color:'#0066F5'}}>terms of service</Link> and <Link to='/privacy-policy' style={{color:'#0066F5'}}>privacy policy</Link>apply</div>
            </div>

            <div className="hd-ajaj">
                
                <h1 className='text-heading' data-aos='fade-right'>Send Us Your errands</h1>

                <p className='text-primary' data-aos='fade-up'>Connect with thousands of people who are eager to share their time with you and help you run your errands</p>

                {/* <h5 className='text-tertiary'>What type of herrands are you running today?</h5> */}
                <div className="button">
                    <Link to='/onsite' className='hrd-btn'>Send Now</Link>
                </div>
                <div className='hd-kksml'>
                    <div className='hd-dhhsk'>
                        <span className='hd-sjajk'/>
                        <p>Time-sharing</p>
                    </div>

                    <div className='hd-dhhsk'>
                        <span className='hd-sjajk'/>
                        <p>Productivity</p>
                    </div>

                    <div className='hd-dhhsk'>
                        <span className='hd-sjajk'/>
                        <p>Community</p>
                    </div>
                </div>

                <a href='tel:+2347015263608' style={{color :'#fff'}} className='hd-gjsj'>
                    <span className='hd-skakka'><BsFillTelephoneFill size={15}/></span>
                    <span>Give us a call 📞 - +701 526 3608</span>
                </a>

                <a href='mailto:Send@herrands.com' style={{color :'#fff'}} className='hd-gjsj'>
                    <span className='hd-skakka'><BsEnvelope size={15}/></span>
                    <span>Send us an email 📩 - Send@herrands.com</span>
                </a>

                

            </div>
            
        </div>

       
        {/* <div className="hrd-body">
            <div className='hrd-bg'>
                <div className="hrd-box">
                   <h1 style={{fontSize:55, letterSpacing: 3}} className="hrd-header-mobile">Don't carry it all alone!</h1>
                   <p style={{width : '8%', fontSize:30, lineHeight : 2, fontWeight: '500'}} className="hrd-primary-mobile">Connect with thousands of people who are eager to share their time with you and help you achieve your goals</p>
                   <h1 className="hrd-tertiary-mobile" style={{width : '63%'}}>What type of herrands are you running today?</h1>
                </div>
                <div className="hrd-3iiks">
                    <div className='hrd-dsosl'>
                         <div className="button">
                             <Link to='/onsite' className='hrd-btn' style={{background :'#26344f' , color: '#fff'}}>On Site</Link>
                             <Link to='/virtual' className='hrd-btn' style={{color :'#26344f' , border : '1px solid #26344f'}}>Virtual</Link>
                             <Link to='/join-us' hidden>join</Link>
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
            </div> */}

    </div>
  )
}

export default Desktop
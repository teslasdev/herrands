import React from 'react'
import './Body.css'
import AOS from 'aos'
import {Link} from 'react-router-dom'


const Body = (props) => {
  AOS.init();
  return (
    <div>
        <div className="hrd-body">
            <div className="hrd-box">
                <h2 data-aos="fade-right">Run the physical and virtual herrands that steal your time away!</h2>
                <h4>We want to empower you to attend to every important thing on or off of your to-do list. No need to beat yourself up anymore. Less worry, more action.</h4>
                <div className="hrd-dhas" data-aos="fade-up">
                    <h3>What type of errands are you running today?</h3>
                    <div className="hrd-buttons">
                        <Link to='/onsite'  className='hrd-btn hrd-site'>On Site</Link>
                        <Link to="/virtual" className={props.colorBg ? 'hrd-btn hrd-virtual'+' '+props.colorBg : 'hrd-btn hrd-virtual' }>Virtual</Link>
                    </div>
                </div>
            </div>

            <div className="hrd-bg">
                <div class="hrd-person" data-aos="fade-right">{""}</div>
            </div>
        </div>
    </div>
  )
}

export default Body
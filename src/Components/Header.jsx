import React from 'react'
import './Header.css';
import Typewriter from 'typewriter-effect';


const Header = (props) => {
  return (
    <div>
        <div className="hrd-header">
          <div className="hrd-logo_box">
            <img src={props.logo} alt="" />
          </div>

          <div className="hrd-sbhJ">
            <h3>
            <Typewriter
              options={{
                strings: [props.text],
                autoStart: true,
                loop: true,
              }}
            />
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Header
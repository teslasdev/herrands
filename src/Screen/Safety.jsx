import React from 'react'
import logo from '../Images/iconsvg.svg'
import { Link } from 'react-router-dom'

const Safety = () => {
  return (
    <div className='gjskfk'>
         <div className="header bg-white h-[80px] py-8 sm:px-0 px-2 flex sm:justify-center items-center text-lg">
            <div className='sm:w-[80%]  flex justify-between items-center'>
            <div className="w-[60px]">
               <img src={logo} alt="" />
            </div>

            <div className='sm:flex hidden h-full items-center w-[30%]'>
               <nav className='text-[13px] font-medium flex items-center gap-12'>
                  <Link>Support</Link>
                  <div className='bg-[#0066F5] rounded-full text-white text-[13px] flex items-center justify-center w-[80px] h-[36px]'>
                     Sign up
                  </div>
                  <div>
                     Sign In
                  </div>
               </nav>
            </div>
            </div>
         </div>

         <div className='container text-[16px] flex justify-center items-center w-full'>
            <div className='content sm:w-[80%] w-[95%] py-24'>
               <h3 className='text-[30px] font-medium'>
               Safety Requirements
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <p className='py-4'>Hi there, Welcome to our time-sharing community, where you access a smarter way of managing your day!</p>
                  <p>At Herrands, we prioritize your safety and well-being when you use our time-sharing platform. To ensure you have a stellar experience every time you use our platform, here are some safety tips and recommendations:</p>
               </div>

               <div className='w-full sm:h-[500px] h-[250px] py-4'>
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
               </div>

               <h3 className='text-[30px] font-medium py-8'>
               Safety Tips
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Profile Verification :</b>  Verify the profiles of agents and make sure they are from our platform before delegating your errands to them. Furthermore, we discourage offline dealings in any form.</p>
                  </span>
               </div>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Meeting in Public :</b>  For errands that require physical interactions and meet-ups, consider choosing public places for added safety.</p>
                  </span>
               </div>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Payment Safety :</b>  Use secure payment methods, and utilize our built-in payment system when available</p>
                  </span>
               </div>


               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Clear Communication :</b>  Maintain clear communication with agents regarding your errands requirements and expectations.</p>
                  </span>
               </div>

         

               <h3 className='text-[30px] font-medium py-8'>
                  Privacy
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <p>Safeguard your personal information and share only the details necessary for the efficient running and completion of your errands.</p>
               </div>

               <h3 className='text-[30px] font-medium py-8'>
                  Task Guidelines
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <p>When sending errands and/or assigning tasks, ensure to provide your agent with clear instructions and specify any safety requirements you have for your maximum satisfaction.</p>
               </div>
               

            </div>
         </div>
    </div>
  )
}

export default Safety
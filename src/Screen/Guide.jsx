import React from 'react'
import logo from '../Images/iconsvg.svg'
import { Link } from 'react-router-dom'

const Guide = () => {
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
                  Guidelines
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <p className='py-4'>Hi there, Welcome to our time-sharing community!</p>
                  <p>At Herrands, we believe in creating a positive and professional environment where our agents can provide exceptional services to our valued customers. To ensure a smooth experience for you while using our platform, please adhere to the following guidelines:</p>
               </div>

               <div className='w-full sm:h-[500px] h-[250px] py-4'>
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
               </div>

               <h3 className='text-[30px] font-medium py-8'>
                  Code of Conduct
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Professionalism :</b>  At Herrands, one of our core values is respect. Be sure to maintain professionalism, politeness, and respect in all your interactions with customers and fellow agents.</p>
                  </span>
               </div>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Punctuality :</b>  Be punctual and arrive on time for tasks and appointments that are assigned and given to you as errands. In case of unforeseen circumstances that can result in delay, ensure you communicate promptly to your sender.</p>
                  </span>
               </div>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Task Completion :</b>  To showcase excellence, ensure that you commit to completing all errands to the best of your abilities, meeting the customer's expectations. This improves your rating and qualifies you for more opportunities on our platform.</p>
                  </span>
               </div>


               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Communication :</b>  Communicate clearly and promptly with customers. Keep them informed about the progress of their errands. There are built-in features in your app to help you provide excellent communications for your customers.</p>
                  </span>
               </div>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Privacy :</b>  You are being trusted with some confidential information to be able to run your errands efficiently on our platform. Respect the privacy and confidentiality of our customers' information at all times.</p>
                  </span>
               </div>

               <h3 className='text-[30px] font-medium py-8'>
                  Safety Measures
                  <span className='w-[15px] flex rounded-md bg-[#0066F5] h-[5px]'></span>
               </h3>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Follow Traffic Rules :</b>  When running errands that involve using roads and highways, always wear your protective equipment, obey traffic laws and drive safely.</p>
                  </span>

               </div>
               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Secure Items :</b>  Safeguard items you're responsible for, ensuring they are not damaged or lost. Some items require handling with care. Ensure that you are aware of the kind of items being handed to you, and handle them appropriately.</p>
                  </span>
               </div>

               <div className='py-4'>
                  <span className='flex'>
                     <p> <b>Social Distancing :</b>  In appropriate situations, maintain social distancing for the safety of both parties.</p>
                  </span>
               </div>

            </div>
         </div>
    </div>
  )
}

export default Guide
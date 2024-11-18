import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='w-screen flex h-[300px] flex-col'>
        
        <div className='flex justify-between w-screen h-2/3'>
            <ul className='text-[#6B6E70] flex justify-center items-center px-8'>
                <li>
                <li className='mt-1 font-semibold'>NAING LIN HTET</li>
                <li className='mt-1 font-semibold'>nainglinhtet1810@gmail.com</li>
                <li className='mt-1 font-semibold'>+959-944-080-485</li>
                <button onClick={() => window.location = 'mailto:nainglinhtet1810@gmail.com'} className='bg-[#000] px-3 py-2 mt-4 rounded text-white hover:-translate-y-1 hover:bg-blue-700 transition-all duration-500'>Contact Me</button>

                </li>
            </ul>
            <div className='flex justify-center items-center px-16 gap-8'>
                <a href="#" target="_blank">
                  <img src={assets.github} alt="github" className='w-8 hover:-translate-y-1 transition-all duration-200'/>
                </a>
                <a href="#" target="_blank">
                  <img src={assets.linkedin} alt="linkedin" className='w-8 hover:-translate-y-1 transition-all duration-200'/>
                </a>
            </div>
        </div>
        <div className='bg-[#000] h-1/3 w-screen flex justify-center items-center'>
            <span className='text-[#6B6E70]'>Copyright &copy; 2024 NAING LIN HTET.All rights reserved.</span>
        </div>
    </div>
    </>
  )
}

export default Footer
import React from 'react';
import { assets } from "../assets/assets";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <div>
      <div className="font-roboto flex sm:flex-row flex-col w-screen h-screen">
        {/* Left Side */}
        <div className="h-screen sm:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:4xl font-bold text-white">NAING LIN HTET</h1>
          <h2 className="text-[#86C232] text-lg sm:text-2xl font-semibold mt-4">
            Front End Developer
          </h2>
          <h2 className="text-[#6B6E70]  sm:text-xl font-semibold mt-4">
            Coding is my calling!
          </h2>
          <div className="flex mt-8 w-full gap-8 justify-center">
            <a href="https://github.com/NaingLinHtet01" target="_blank">
              <img src={assets.github} alt="github" className='w-6 sm:w-8 hover:-translate-y-1 transition-all duration-200'/>
            </a>
            <a href="https://www.linkedin.com/in/naing-lin-htet-71b671315" target="_blank">
              <img src={assets.linkedin} alt="linkedin" className='w-6 sm:w-8 hover:-translate-y-1 transition-all duration-200'/>
            </a>
            <a href={assets.resume} target="_blank">
              <img src={assets.profile} alt="linkedin" className='w-6 sm:w-8 hover:-translate-y-1 transition-all duration-200'/>
            </a>
          </div>
        </div>

        {/* Right Side Cube*/}
        <div className="h-screen canvas-container sm:w-1/2 flex justify-center items-center">
          <Canvas>
            <OrbitControls />
              <Sphere/>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import { assets } from "../assets/assets";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <div>
      <div className="font-roboto bg-[#1A191D] flex w-screen h-screen">
        {/* Left Side */}
        <div className="h-screen w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white">NAING LIN HTET</h1>
          <h2 className="text-[#86C232] text-2xl font-semibold mt-4">
            Front End Developer
          </h2>
          <h2 className="text-[#6B6E70] text-xl font-semibold mt-4">
            Coding is my calling!
          </h2>
          <div className="flex mt-8 w-full gap-8 justify-center">
            <a href="#" target="_blank">
              <img src={assets.github} alt="github" className='w-8 hover:-translate-y-1 transition-all duration-200'/>
            </a>
            <a href="#" target="_blank">
              <img src={assets.linkedin} alt="linkedin" className='w-8 hover:-translate-y-1 transition-all duration-200'/>
            </a>
            <a href={assets.resume} target="_blank">
              <img src={assets.profile} alt="linkedin" className='w-8 hover:-translate-y-1 transition-all duration-200'/>
            </a>
          </div>
        </div>

        {/* Right Side Cube*/}
        <div className="h-screen canvas-container w-1/2 flex justify-center items-center">
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
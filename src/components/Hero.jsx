import React from "react";

const Hero = () => {
  return (
    <>
        <div className="bg-[#1A191D]">
            <div className="grid grid-cols-2 grid-rows-2 gap-12 px-8 py-12">
                {/* Libraries and Framework */}
                <div className="row-span-2  bg-[#121114] rounded-md shadow-[0px_0px_5px_2px_#000] px-8 py-4 hover:-translate-y-4 hover:text-[#61892F] text-[#6B6E70] transition-all duration-500">
                    <h1 className="text-2xl font-bold">Libraries and Framework</h1>
                    <ul className="mt-4 px-12 text-lg">
                        <li className="mt-1">React</li>
                        <li className="mt-1">Vite</li>
                        <li className="mt-1">Next.js</li>
                        <li className="mt-1">NodeJs</li>
                        <li className="mt-1">Tailwind Css</li>
                        <li className="mt-1">Bootstrap</li>
                        <li className="mt-1">Styled Components</li>
                        <li className="mt-1">Framer Motion</li>
                        <li className="mt-1">Three Js</li>
                        <li className="mt-1">React Three Fiber</li>
                    </ul>
                </div>
                
                {/* Languages */}
                <div className="bg-[#121114] shadow-[0px_0px_5px_2px_#000] px-8 py-4 hover:-translate-y-4 hover:text-[#61892F] text-[#6B6E70] transition-all duration-500">
                    <h1 className="text-2xl font-bold ">Programming Languages</h1>
                    <ul className="mt-4 px-12 text-base">
                        <li className="mt-1">HTML</li>
                        <li className="mt-1">CSS</li>
                        <li className="mt-1">Sass</li>
                        <li className="mt-1">JavaScript</li>
                        <li className="mt-1">Java</li>
                    </ul>
                </div>
                
                {/* Tools and Platform */}
                <div className="col-start-2 row-start-2 bg-[#121114] shadow-[0px_0px_5px_2px_#000] px-8 py-4 hover:-translate-y-4 hover:text-[#61892F] text-[#6B6E70] transition-all duration-500">
                    <h1 className="text-2xl font-bold">Tools and Platforms</h1>
                    <ul className="mt-4 px-12 text-base">
                        <li className="mt-1">Git</li>
                        <li className="mt-1">GitHub</li>
                        <li className="mt-1">VS Code</li>
                        <li className="mt-1">Chrome DevTools</li>
                        <li className="mt-1">Netlify</li>
                        <li className="mt-1">Vercel</li>
                        <li className="mt-1">Figma[Wireframe]</li>
                        <li className="mt-1">npm</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default Hero;

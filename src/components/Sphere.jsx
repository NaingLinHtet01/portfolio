import React from 'react'
import { Canvas,useFrame} from '@react-three/fiber';
import { useRef } from 'react'
const Sphere = () => {
    const sphereRef = useRef();

    useFrame(()=>{
        sphereRef.current.rotation.y += 0.0005;
        sphereRef.current.rotation.x += 0.0005;
    });

  return (
    <>
        <mesh ref={sphereRef}>
            <sphereGeometry args={[2.5,8,8]}/>
            <meshBasicMaterial wireframe color={"#86C232"}/>
        </mesh>
    </>
  )
}

export default Sphere
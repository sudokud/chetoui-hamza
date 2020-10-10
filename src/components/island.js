import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three"






const Earth = () => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load("/Earth.gltf", setModel)
    })

    return model ? <primitive object={model.scene} /> : null
}



const Island = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}
        >

            <ambientLight intensity={0.5} />
            <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
            <fog attach="fog" args={["black", 10, 25]} />
            <Earth />

        </Canvas>
    )
}
export default Island
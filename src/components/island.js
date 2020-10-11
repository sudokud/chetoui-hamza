import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))


    const loader = new THREE.TextureLoader();
    // const globalMaterial = new THREE.MeshBasicMaterial({
    //     map: loader.load('img/GatsbyJS.svg'),
    // });
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
            material={new THREE.MeshBasicMaterial({
                map: loader.load('img/sunIcon.svg'),
            })}

        >
            <boxBufferGeometry args={[4, 4, 4]} />
            {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
            {/* <meshBasicMaterial material={globalMaterial} /> */}
        </mesh>
    )
}

const Island = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    )
}


export default Island
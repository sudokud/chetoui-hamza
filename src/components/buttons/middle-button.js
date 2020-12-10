import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const MiddleButton = styled(motion.button)`
width:45px;
height:39px;
padding:0;
margin:0;
position:relative;
border:0px solid transparent;
background:transparent;
.btn-icon{
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
}
#btn-body{
    opacity:0.999937;
    fill:#916f7c;
    fill-opacity:1;
    stroke-width:0.074332;
    stroke-linecap:round;
    paint-order:markers fill stroke;
}
#btn-borders{
    opacity:0.999937;
    fill:#241c1f;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;
}
#btn-shadow{
    opacity:0.999937;
    fill:#48373e;
    fill-opacity:1;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;


}

#border-translate{
    opacity:0.999937;
    fill:#241c1f;
    fill-opacity:1;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;


}
#body-translate{
    opacity:0.999937;
    fill:#916f7c;
    fill-opacity:1;
    stroke-width:0.074332;
    stroke-linecap:round;
    paint-order:markers fill stroke;

}
.between-button-shadow{
    opacity:0.45;
    fill:#241c1f;
    fill-opacity:1;
    stroke-width:0.274373;
    stroke-linecap:round;
    paint-order:markers fill stroke;
}
`

export default function ({ imgSrc, imgAlt, ...props }) {
    const [active, setActive] = useState(false);
    return (
        <MiddleButton
            onMouseEnter={() => (setActive(true))}
            onMouseLeave={() => (setActive(false))}
            {...props}
        >

            <svg
                width="100%"
                height="100%"
                viewBox="0 0 16.933331 14.500924"
                version="1.1"
                id="svg1081"
            >

                <g

                    id="layer1">
                    <path
                        id="btn-body"

                        d="m 0,6.741191 v 7.276558 h 8.46666 8.46667 V 6.741191 H 8.46666 Z" />
                    <path
                        id="btn-borders"
                        d="m 0,14.017749 v 0.483175 h 8.46666 8.46667 V 14.017749 H 8.46666 Z" />
                    <path
                        id="btn-shadow"
                        d="m 0,12.566675 v 1.450557 h 8.46666 8.46667 V 12.566675 H 8.46666 Z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="border-translate"
                        d="m 0,0 v 0.483691 h 8.46666 8.46667 V 0 H 8.46666 Z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="body-translate"
                        d="m 0,0.483691 v 12.082467 h 8.46666 8.46667 V 0.483691 H 8.46666 Z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="between-button-shadow"
                        className="between-button-shadow"
                        d="M 0,0.483691 H 0.50156 V 14.017762 H 0 Z" />
                </g>
            </svg>
            <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                <img src={imgSrc} alt={imgAlt} />
            </motion.span>
        </MiddleButton>
    )
}
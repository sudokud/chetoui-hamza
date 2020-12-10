import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const LeftButton = styled(motion.button)`
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
    fill:#916f7c;
    fill-opacity:1;
    stroke-width:0.074332;
    stroke-linecap:round;
    paint-order:markers fill stroke;
}
#btn-borders{
    fill:#241c1f;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;

}
#btn-shadow{
    fill:#48373e;
    fill-opacity:1;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;

}

#border-translate{
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
`

export default function ({ imgSrc, imgAlt, ...props }) {
    const [active, setActive] = useState(false);
    return (
        <LeftButton
            onMouseEnter={() => (setActive(true))}
            onMouseLeave={() => (setActive(false))}
            {...props}
        >

            <svg
                width="100%"
                height="100%"
                viewBox="0 0 16.933334 14.50092"
                version="1.1"
                id="svg989"
            >

                <g
                    id="LeftButton-layer1"
                    transform="translate(-84.515476,-131.84478)">
                    <path
                        id="btn-body"
                        d="m 101.44881,138.58597 v 7.27656 H 84.999166 v -6.79287 -0.48369 z" />
                    <path
                        id="btn-borders"
                        d="m 84.999166,139.06966 v 6.30917 h -0.48369 v -6.30917 z m 0,6.30917 h 0.48369 v 0.4837 h -0.48369 z m 0.48369,0.4837 h 15.965954 v 0.48317 H 85.482856 Z" />
                    <path
                        id="btn-shadow"
                        d="m 85.482856,143.92776 v 0.48369 h 15.965954 v 1.45056 H 85.482856 v -0.48318 h -0.48369 v -0.48369 -0.48369 -0.48369 z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="border-translate"
                        d="m 101.44881,131.84478 v 0.48369 H 85.482856 v -0.48369 z m -15.965954,0.48369 v 0.48369 h -0.48369 v -0.48369 z m -0.48369,0.48369 v 6.58719 l -0.48369,0.004 v -6.5908 z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="body-translate"
                        d="m 101.44881,132.32847 v 12.08246 H 85.482856 v -0.48317 h -0.48369 v -11.1156 h 0.48369 v -0.48369 z" />
                </g>
            </svg>
            <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                <img src={imgSrc} alt={imgAlt} />
            </motion.span>
        </LeftButton>
    )
}
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const RightButton = styled(motion.button)`
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
        <RightButton
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
                    id="right-button-layer1"
                    transform="translate(-140.45595,-91.7793)">
                    <path
                        id="btn-body"
                        d="m 140.45595,98.520491 v 7.276559 h 16.44965 v -6.792868 -0.483691 z" />
                    <path
                        id="btn-borders"
                        d="m 156.9056,99.004182 v 6.309178 h 0.48369 v -6.309178 z m 0,6.309178 h -0.4837 v 0.48369 h 0.4837 z m -0.4837,0.48369 h -15.96595 v 0.48317 h 15.96595 z" />
                    <path
                        id="btn-shadow"
                        d="m 156.4219,103.86228 v 0.48369 h -15.96595 v 1.45056 h 15.96595 v -0.48317 h 0.4837 v -0.48369 -0.4837 -0.48369 z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="border-translate"
                        d="m 140.45595,91.7793 v 0.483691 H 156.4219 V 91.7793 Z m 15.96595,0.483691 v 0.483692 h 0.4837 v -0.483692 z m 0.4837,0.483692 v 6.587194 l 0.48369,0.0041 v -6.590808 z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="body-translate"
                        d="m 140.45595,92.262991 v 12.082469 h 15.96595 v -0.48318 h 0.4837 V 92.746683 h -0.4837 v -0.483692 z" />
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="between-button-shadow"
                        className="between-button-shadow"
                        d="m 140.45595,92.262463 h 0.50156 v 13.534067 h -0.50156 z" />
                </g>
            </svg>
            <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                <img src={imgSrc} alt={imgAlt} />
            </motion.span>
        </RightButton>
    )
}
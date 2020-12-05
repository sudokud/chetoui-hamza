import React, { useContext } from "react";
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Context from '../store/context'


const FCSButton = styled(motion.button)`
width:144px;
height:59px;
padding:0;
margin:0;
position:relative;
border:0px solid transparent;
background:transparent;
.text{
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.47rem;
    color:${props => props.theme.palette.cultured};
}
#btn-body{
    fill:${props => props.isDark ? "#a18c96" : "#007bff"};
}
#btn-borders{
    fill:${props => props.isDark ? "#684656" : "#00356e"};
}
#btn-shadow{
    fill:${props => props.isDark ? "#402b35" : "#004c9e"};
}
`


function FancadeButton({ text, ...props }) {
    const [active, setActive] = useState(false);
    const { state } = useContext(Context);
    return (
        <FCSButton
            isDark={state.isDark}
            onMouseEnter={() => (setActive(true))}
            onMouseLeave={() => (setActive(false))}
            text={text}
            {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                version="1.1"
                viewBox="0 0 33.867 14.501"
            // opacity={active ? 1 : 0.6}
            >
                <motion.g
                    strokeLinecap="round"
                    strokeWidth="0.074"
                    paintOrder="markers fill stroke"
                    transform="translate(-45.713 -106.98)"
                >
                    <motion.path
                        id="btn-body"
                        fill="#c4b7c8"
                        fillOpacity="1"
                        d="M46.197 107.464H79.096V120.997H46.197z"
                    ></motion.path>
                    <motion.path
                        id="btn-borders"
                        fill="#3e3748"
                        d="M46.68 106.98v.484h31.932v-.484zm31.932.484v.483h.484v-.483zm.484.483v12.567h.484v-12.567zm0 12.567h-.484v.483h.484zm-.484.483H46.68v.484h31.932zm-31.932 0v-.483h-.483v.483zm-.483-.483v-12.567h-.484v12.567zm0-12.567h.483v-.483h-.483z"
                        opacity="1"
                    ></motion.path>
                    <motion.path
                        id="btn-shadow"
                        fill="#a793ac"
                        fillOpacity="1"
                        d="M46.197 119.063v1.451h.483v.483h31.932v-.483h.484v-1.451h-.484v.483H46.68v-.483z"
                        opacity="1"
                    ></motion.path>
                </motion.g>
            </svg>
            <span className="text">
                {text}
            </span>
        </FCSButton>
    );
}

export default FancadeButton;

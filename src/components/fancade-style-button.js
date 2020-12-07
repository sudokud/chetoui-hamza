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
    font-size:1rem;
    color:${props => props.theme.palette.cultured};
}
#btn-body, #body-translate{
    fill:${props => props.isDark ? "#a18c96" : "#007bff"};
}
#btn-borders, #border-translate{
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
            >
                <motion.g
                    strokeLinecap="round"
                    strokeWidth="0.074"
                    paintOrder="markers fill stroke"
                    transform="translate(-45.713 -106.98)"
                >
                    <path
                        id="btn-body"
                        fill="#c4b7c8"
                        fillOpacity="1"
                        strokeWidth="0.281"
                        d="M1.828 25.477v27.502h124.344V25.477H1.828z"
                        opacity="1"
                        transform="matrix(.26458 0 0 .26458 45.713 106.98)"
                    ></path>
                    <path
                        id="btn-borders"
                        fill="#3e3748"
                        strokeWidth="0.28"
                        d="M0 27.305V51.15h1.828V27.305H0zM1.828 51.15v1.829h1.828V51.15H1.828zm1.828 1.829v1.826h120.688v-1.826H3.656zm120.688 0h1.828V51.15h-1.828v1.829zm1.828-1.829H128V27.305h-1.828V51.15z"
                        opacity="1"
                        transform="matrix(.26458 0 0 .26458 45.713 106.98)"
                    ></path>
                    <path
                        id="btn-shadow"
                        fill="#a793ac"
                        fillOpacity="1"
                        strokeWidth="0.074"
                        d="M46.197 119.063v1.451h.483v.483h31.932v-.483h.484v-1.451h-.484v.483H46.68v-.483z"
                        opacity="1"
                    ></path>
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="border-translate"
                        fill="#3e3748"
                        fillOpacity="1"
                        strokeWidth="0.074"
                        d="M46.68 106.98v.483h31.932v-.483zm31.932.483v.484h.484v-.484zm.484.484v6.587l.484.004v-6.59zm-32.416-.484h-.483v.484h.483zm-.483.484h-.484v6.595l.484-.005z"
                        opacity="1"
                    ></motion.path>
                    <motion.path
                        animate={{ y: active ? 1.310 : 0 }}
                        id="body-translate"
                        fill="#c4b7c8"
                        fillOpacity="1"
                        strokeWidth="0.074"
                        d="M46.68 107.463v.484h-.483v11.116h.483v.483h31.932v-.483h.484v-11.116h-.484v-.484z"
                        opacity="1"
                    ></motion.path>
                </motion.g>
            </svg>
            <motion.span className="text" animate={{ y: active ? "3px" : 0 }}>
                {text}
            </motion.span>
        </FCSButton>
    );
}

export default FancadeButton;

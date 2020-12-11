import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonWrapper } from './left-button'

export default function ({ imgSrc, imgAlt, ...props }) {
    const [active, setActive] = useState(false);
    return (
        <ButtonWrapper
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
                        fillOpacity={0.6}
                        d="M 0,0.483691 H 0.50156 V 14.017762 H 0 Z" />
                </g>
            </svg>
            <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                <img src={imgSrc} alt={imgAlt} />
            </motion.span>
        </ButtonWrapper>
    )
}
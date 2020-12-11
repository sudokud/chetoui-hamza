import React from 'react'
import { useState } from 'react'
import { ButtonWrapper } from './left-button'
import { motion } from 'framer-motion'

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
                        fillOpacity={0.6}
                        d="m 140.45595,92.262463 h 0.50156 v 13.534067 h -0.50156 z" />
                </g>
            </svg>
            <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                <img src={imgSrc} alt={imgAlt} />
            </motion.span>
        </ButtonWrapper>
    )
}
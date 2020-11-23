import React from "react";
import { useContext } from 'react'
import styled from 'styled-components';
import Context from '../../store/context'
import { motion, AnimatePresence } from 'framer-motion'
import Layer1 from './layer1'
import Layer2 from './layer2'
import Layer3 from './layer3'
import Moon from './moon'
import Sun from './sun'


const GlobaStyles = styled.div`
    position:relative;
    z-index:1;
    #lantern{
        fill:${props => props.isDark ? '#f2f2f3' : '#007bff'};
    }
    svg{
        width:100%;
    }
`
const MoonWrapper = styled.div`
    position:absolute;
    z-index:-13;
    left:10%;
    top:10%;

`
const SunWrapper = styled.div`
    position:absolute;
    z-index:-13;
    left:10%;
    top:10%;
`

function Tokyo() {
    const { state } = useContext(Context)
    return (
        <GlobaStyles isDark={state.isDark}>
            {/* {state.isDark ?
                <MoonWrapper>

                    <Moon
                        id="moon"
                        fill="#f2f2f2"
                        strokeWidth="1.122"
                        d="M440.119 70.813h4.021v-7.88h3.99v-4.017h3.96V54.93h8.042v-4.048h20.971V54.9h8.012v4.08h3.99v4.016h3.96v7.88h4.051V91.92h-3.99v8.003h-4.02V104h-4.022v3.831h-8.042v4.08h-20.755v-4.017h-8.167v-4.017h-3.959V99.89h-4.051v-8.034h-3.991z"
                        display="inline"
                    ></Moon>
                </MoonWrapper>
                :
                <SunWrapper>

                    <Sun
                        id="sun"
                        fill="#eea2a3"
                        strokeWidth="1.122"
                        d="M440.119 70.813h4.021v-7.88h3.99v-4.017h3.96V54.93h8.042v-4.048h20.971V54.9h8.012v4.08h3.99v4.016h3.96v7.88h4.051V91.92h-3.99v8.003h-4.02V104h-4.022v3.831h-8.042v4.08h-20.755v-4.017h-8.167v-4.017h-3.959V99.89h-4.051v-8.034h-3.991z"
                        display="inline"
                    ></Sun>
                </SunWrapper>} */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg1625"
                width="1279.364"
                // height="439.748"
                height="488.33218"
                x="0"
                y="0"
                fill="none"
                version="1.1"
                // viewBox="0 0 1279.364 439.748"
                viewBox="0 0 1275.0286 439.748"
            // preserveAspectRatio="xMidYMid meet"
            >
                <defs id="defs1623">
                    <clipPath id="clip0">
                        <path id="rect1620" fill="#fff" d="M0 0H1140V471H0z"></path>
                    </clipPath>
                </defs>
                <Layer1 isDark={state.isDark} />
                <Layer2 isDark={state.isDark} />
                <Layer3 isDark={state.isDark} />
            </svg>
        </GlobaStyles>
    );
}

export default Tokyo;


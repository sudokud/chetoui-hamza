import React from "react";
import { useContext } from 'react'
import styled from 'styled-components';
import Context from '../../store/context'
import { motion } from 'framer-motion'
import Layer1 from './layer1'
import Layer2 from './layer2'
import Layer3 from './layer3'

const GlobaStyles = styled.div`
    #lantern{
        fill:${props => props.isDark ? '#f2f2f3' : '#007bff'};
    }
    svg{
        width:100%;
    }
`

function Tokyo() {
    const { state } = useContext(Context)
    return (
        <React.Fragment>
            <GlobaStyles isDark={state.isDark}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="svg1625"
                    width="1279.364"
                    height="439.748"
                    x="0"
                    y="0"
                    fill="none"
                    version="1.1"
                    viewBox="0 0 1279.364 439.748"
                    preserveAspectRatio="xMidYMid meet"
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
        </React.Fragment>
    );
}

export default Tokyo;
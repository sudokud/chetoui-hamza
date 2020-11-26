import React from "react";
import { useContext } from 'react'
import styled from 'styled-components';
import Context from '../../store/context'
import Layer1 from './layer1'
import Layer2 from './layer2'
import Layer3 from './layer3'



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

function Tokyo() {
    const { state } = useContext(Context)
    return (
        <GlobaStyles isDark={state.isDark}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg1625"
                x="0"
                y="0"
                fill="none"
                version="1.1"
                width="1279.364"
                height="517.18311"
                viewBox="0 0 1279.364 517.18311"
            >
                <filter
                    style={{ colorInterpolationFilters: "sRGB" }}
                    id="filter2461">
                    <feFlood
                        floodOpacity="1"
                        floodColor="rgb(255,255,255)"
                        result="flood"
                        id="feFlood2451" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                        id="feComposite2453" />
                    <feGaussianBlur
                        in="composite1"
                        stdDeviation="6"
                        result="blur"
                        id="feGaussianBlur2455" />
                    <feOffset
                        dx="2.77556e-17"
                        dy="4.57967e-15"
                        result="offset"
                        id="feOffset2457" />
                    <feComposite
                        in="SourceGraphic"
                        in2="offset"
                        operator="over"
                        result="composite2"
                        id="feComposite2459" />
                </filter>
                <Layer1 isDark={state.isDark} />
                <Layer2 isDark={state.isDark} />
                <Layer3 isDark={state.isDark} />
            </svg>
        </GlobaStyles>
    );
}

export default Tokyo;


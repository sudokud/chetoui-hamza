import React from 'react'
// import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.div`
    padding:0;
    margin:0;
    width:fit-content;
    position:relative;
    .btn { 
        position:relative;
        width: 90px;
        height: 40px;
        background: ${props => props.theme.palette.link};
        display: inline-block;
        margin: 0 auto;
        font-size: 1.61803398875rem;
        line-height: 8px;
        padding: 15px 0;
        text-align: center;
        cursor: pointer;
        
        text-transform: uppercase;
        clip-path: polygon(0% 15%, 5% 15%, 5% 0%, 95% 0%, 95% 15%, 100% 15%, 100% 85%, 95% 85%, 95% 100%, 5% 100%, 5% 85%, 0% 85%);
    }
    &:before {
        content:" ";
        position:absolute;
        top:7px;
        left:0;
        z-index:0;
        width: 90px;
        height: 40px;
        
        background: #003e80;
        clip-path: polygon(0% 15%, 5% 15%, 5% 0%, 95% 0%, 95% 15%, 100% 15%, 100% 85%, 95% 85%, 95% 100%, 5% 100%, 5% 85%, 0% 85%);
    }
   
    .btn:active {
        transform: translate3D(0, 4px, 0);
    }
    .btn:hover {
        filter:(61%);
    }
   
`



const Btn = ({ text, type }) => {

    return (
        <>
            <Button>
                <button type={type} className="btn">{text}</button>
            </Button>
        </>
    )
}

export default Btn
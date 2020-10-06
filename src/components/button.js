import React from 'react'
// import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.div`
    padding:0;
    margin:0;
    width:fit-content;
    position:relative;
    
    & > .btn { 
        position:relative;
        width: 90px;
        height: 40px;
        background: #b7e1b5;
        display: inline-block;
        margin: 0 auto;
        font-size:1rem;
        line-height: 8px;
        padding: 15px 0;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        clip-path: polygon(
            0% 10%, 5% 10%, 5% 0%,
            95% 0%, 95% 10%, 100% 10%,
            100% 95%, 95% 95%, 95% 100%,
            5% 100%, 5% 95%, 0% 95%);
        
    }
    &:before {
        content:" ";
        position:absolute;
        top:7px;
        left:0;
        z-index:0;
        width: 90px;
        height: 40px;
        background: #5c715b;
        clip-path: polygon(
            0% 10%, 5% 10%, 5% 0%,
            95% 0%, 95% 10%, 100% 10%,
            100% 95%, 95% 95%, 95% 100%,
            5% 100%, 5% 95%, 0% 95%);
    }
   
    .btn:active {
        transform: translate3D(0, 7px, 0);
    }
    
    .btn:hover {
        filter:(61%);
    }
   
   
`



const Btn = ({ text, type, callBack }) => {

    return (
        <>
            <Button>
                <button type={type} className="btn" onClick={callBack}>
                    {text}
                </button>
            </Button>
        </>
    )
}

export default Btn
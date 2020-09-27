import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.div`
    padding:0;
    margin:0;
      
    .btn {
        width: 100px;
        height: calc(100px / ${props => props.theme.golden_ration});
        background-color: ${props => props.theme.palette.link};
        display: inline-block;
        margin: 0 auto;
        font-size: 1.61803398875rem;
        line-height: 12px;
        padding: 15px 0;
        text-align: center;
        box-sizing: border-box;
        color: #F9D879;
        clip-path: polygon(0% 15%, 5% 15%, 5% 0%, 95% 0%, 95% 15%, 100% 15%, 100% 85%, 95% 85%, 95% 100%, 5% 100%, 5% 85%, 0% 85%);
        cursor: pointer;
        text-transform: uppercase;
    }
      
    .btn:hover {
        filter: opacity(.61803398875);
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
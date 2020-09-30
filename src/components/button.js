import React from 'react'
// import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.div`
    padding:0;
    margin:0;
    width:fit-content;
    position:relative;
    &&& > .btn { 
        position:relative;
        width: 90px;
        height: 40px;
        background: #b7e1b5;
        display: inline-block;
        margin: 0 auto;
        font-size: 1.61803398875rem;
        line-height: 8px;
        padding: 15px 0;
        text-align: center;
        cursor: pointer;
        border:1px solid #222;
        border-bottom:0;
        text-transform: uppercase;
        clip-path: polygon(
            0% 10%, 5% 10%, 5% 0%,
            95% 0%, 95% 10%, 100% 10%,
            100% 95%, 95% 95%, 95% 100%,
            5% 100%, 5% 95%, 0% 95%);
        .top_left_pixel{
            position:absolute;
            top:2px;
            left:2px;
            width:2.5px;
            height:2.4px;
            z-index:100;
            font-size:15px;
            background:#222;
        }
        .btn:active .top_left_pixel{
            transform: translate3D(0, 4px, 0);
        }
        .top_right_pixel{
            position:absolute;
            top:2px;
            right:2px;
            width:2.5px;
            height:2.4px;
            z-index:100;
            font-size:15px;
            background:#222;
        }
        .btn:active .top_right_pixel{
            transform: translate3D(0, 4px, 0);
        }
    }
    &:before {
        content:" ";
        position:absolute;
        top:7px;
        left:0;
        z-index:0;
        width: 90px;
        height: 40px;
        border:1px solid #222;
        border-top:0;
        background: #5c715b;
        clip-path: polygon(
            0% 5%, 5% 5%, 5% 0%,
            95% 0%, 95% 5%, 100% 5%,
            100% 95%, 95% 95%, 95% 100%,
            5% 100%, 5% 95%, 0% 95%);
    }
   
    .btn:active {
        transform: translate3D(0, 4px, 0);
    }
    
    .btn:hover {
        filter:(61%);
    }
    .bottom_right_pixel{
        position:absolute;
        top:43.5px;
        right:2px;
        width:2.5px;
        height:2.4px;
        z-index:100;
        font-size:15px;
        background:#222;
    }
    .bottom_left_pixel{
        position:absolute;
        top:43.5px;
        left:2px;
        width:2.5px;
        height:2.4px;
        z-index:100;
        font-size:15px;
        background:#222;
    }
   
`



const Btn = ({ text, type }) => {

    return (
        <>
            <Button>
                <p className="bottom_right_pixel"></p>
                <p className="bottom_left_pixel"></p>
                <button type={type} className="btn">
                    <p className="top_left_pixel"></p>
                    <p className="top_right_pixel"></p>
                    {text}
                </button>
            </Button>
        </>
    )
}

export default Btn
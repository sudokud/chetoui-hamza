import React, { useContext } from "react"
import Context from '../store/context'
import styled from 'styled-components'


// ratio 2,5793

const Classes = styled.div`
    position:relative;
    height:39px;
    .button_root{
        position:relative;
        width:fit-content;
        height:100%;
        background:transparent;
    }
   
    .top_border{
        position:absolute;
        height:2px;
        width:calc(100% - 8px);
        background:#000;
        top:0;
        transform:translateX(4px);
    }
    .bottom_border{
        position:absolute;
        height:2px;
        width:calc(100% - 8px);
        background:#000;
        top:37px;
        transform:translateX(4px);
        z-index:10;
    }

    .left_border{
        position:absolute;
        width:2px;
        height:calc(100% - 8px);
        background:#000;
        left:0;
        transform:translateY(4px);
    }
    .right_border{
        position:absolute;
        width:2px;
        height:calc(100% - 8px);
        background:#000;
        right:0;
        transform:translateY(4px);
    }
    .top_left_pixel{
        position:absolute;
        width:2px;
        height:2px;
        background:#000;
        left:2px;
        top:2px;
    }
    .top_right_pixel{
        position:absolute;
        width:2px;
        height:2px;
        background:#000;
        right:2px;
        top:2px;
    }
    .bottom_right_pixel{
        position:absolute;
        width:2px;
        height:2px;
        background:#000;
        right:2px;
        top:35px;
        z-index:10;
    }
    .bottom_left_pixel{
        position:absolute;
        width:2px;
        height:2px;
        background:#000;
        left:2px;
        top:35px;
        z-index:10;
    }
    .bottom_shadow{
        position:absolute;
        height:4px;
        width:calc(100% - 4px);
        background:#afaec1;
        top:33px;
        transform:translateX(2px);
    }
    .bottom_right_shadow{
        position:absolute;
        height:2px;
        width:2px;
        background:#afaec1;
        top:31px;
        right:2px;
    }
    .bottom_left_shadow{
        position:absolute;
        height:2px;
        width:2px;
        background:#afaec1;
        top:31px;
        left:2px;
    }
    
`

const Text = styled.p`
    font-size:1.4rem;
    padding:0 4px;
    font-family:${props => props.theme.fonts.secondary};
`
const RetroButton = ({ text }) => {
    const { state } = useContext(Context)

    return (
        <React.Fragment>
            <Classes isDark={state.isDark}>
                <div
                    className="button_root"
                >
                    <div
                        className="top_border"
                    ></div>
                    <div
                        className="right_border"
                    ></div>
                    <div
                        className="bottom_border"
                    ></div>
                    <div
                        className="left_border"
                    ></div>
                    <div className="top_left_pixel"></div>
                    <div className="top_right_pixel"></div>
                    <div className="bottom_right_pixel"></div>
                    <div className="bottom_left_pixel"></div>
                    <div className="bottom_shadow"></div>
                    <div className="bottom_right_shadow"></div>
                    <div className="bottom_left_shadow"></div>



                    <Text>{text}</Text>
                </div>
            </Classes>
        </React.Fragment>
    )
}

export default RetroButton
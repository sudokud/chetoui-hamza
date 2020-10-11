import React, { useContext } from "react"
import Context from '../store/context'
import styled from 'styled-components'
import useSound from 'use-sound'


// ratio 2,5793

const Classes = styled.div`
    position:relative;
    height:39px;
    width:fit-content;
    overflow:hidden;
    .bottom_border{
        position:absolute;
        top:37px;
        left:0;
        width:calc(100% - 8px);
        height:2px;
        background:${props => (props.isDark ? "#0c0e05ff" : "#060405ff")};
        transform:translateX(4px);
        z-index:10;
        &:before{
            content:"";
            position:absolute;
            width:2px;
            height:2px;
            background:inherit;
            left:-2px;
            top:-2px;
        }
        &:after{
            content:"";
            position:absolute;
            width:2px;
            height:2px;
            background:inherit;
            right:-2px;
            top:-2px;
        }
    }
    .points{
        background:${props => (props.isDark ? "#0c0e05ff" : "#060405ff")};
        .top_left_pixel{
            position:absolute;
            width:2px;
            height:2px;
            background:inherit;
            left:2px;
            top:2px;
        }
        .top_right_pixel{
            position:absolute;
            width:2px;
            height:2px;
            background:inherit;
            right:2px;
            top:2px;
        }
    }
    .shadow_group{
        background:${props => (props.isDark ? "#71822dff" : "#4f3542ff")};
        .bottom_shadow{
            position:absolute;
            height:5px;
            width:calc(100% - 4px);
            background:inherit;
            top:30px;
            transform:translateX(2px);
        }
        .bottom_right_shadow{
            position:absolute;
            height:5px;
            width:2px;
            background:inherit;
            top:28px;
            right:0;
        }
        .bottom_left_shadow{
            position:absolute;
            height:5px;
            width:2px;
            background:inherit;
            top:28px;
            left:0;
        }
    }
    &:active .points{
        transform:translateY(3px);
    }

  
`
const StyledButton = styled.button`
    position:relative;
    width:${props => props.width || "fit-content"};
    height:100%;
    padding:0;
    margin:0;
    border:2px solid ${props => (props.isDark ? "#0c0e05ff" : "#060405ff")};
    border-bottom:0;
    clip-path: polygon(0 10%, 5% 10%, 5% 0,
         95% 0, 95% 10%, 100% 10%,
        100% 90%, 94.5% 90%, 94.5% 100%,
        5.5% 100%, 5.5% 90%, 0 90%);
    
    &:focus{
        outline: 1px solid #8e8892;
    }
    &:active{
        outline: 1px solid #8e8892;
        transform:translateY(3px);
        clip-path: polygon(0 10%, 5% 10%, 5% 0,
            95% 0, 95% 10%, 100% 10%,
           100% 82%, 95% 82%, 95% 100%,
           5% 100%, 5% 82%, 0 82%);
    }
    &:active .shadow_group{
        transform:translateY(3px);
        filter:opacity(0);
    }
   
`
const Text = styled.p`
    width:100%;
    height:100%;
    padding:8px;
    padding-top:3px;
    background:${props => (props.isDark ? "#d6f756ff" : "#8c727eff")};
    font-size:1.4rem;
    font-family:${props => props.theme.fonts.secondary};
    color: ${props => (props.isDark ? "#1c1124ff" : props.theme.palette.cultured)};
    pointer-events:none;

`
// const Shadow = styled.div`
//     width:100%;
//     height:100%;  
//     background:${props => (props.isDark ? "#0e0912" : "#635f66")};
//     position:absolute;
//     left:-6px;
//     bottom:-6px;
//     filter:blur(2px);
// `
const RetroButton = ({ text, type, width }) => {
    const { state } = useContext(Context)
    const [playSound] = useSound(
        'audio/key_tap.wav', { volume: 0.25 }
    )



    return (
        <React.Fragment>
            <Classes isDark={state.isDark}>
                <div className="points">
                    <div className="top_left_pixel"></div>
                    <div className="top_right_pixel"></div>
                </div>
                <div className="bottom_border"></div>
                <StyledButton
                    type={type}
                    width={width}

                    onClick={() => (playSound())}
                >
                    <div className="shadow_group">
                        <div className="bottom_shadow"></div>
                        <div className="bottom_right_shadow"></div>
                        <div className="bottom_left_shadow"></div>
                    </div>
                    <Text isDark={state.isDark}>{text}</Text>
                </StyledButton>
            </Classes>
        </React.Fragment>
    )
}

export default RetroButton
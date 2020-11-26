import React from "react"
import { useState, useContext } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Context from '../store/context'
import useSound from 'use-sound'




const Classes = styled.div`
.switch {
    position:relative;
    width: 55px;
    height: 31px;
    background: #000;
    display: flex;
    justify-content: ${props => props.isDark ? "flex-start" : "flex-end"};
    cursor: pointer;
    margin: 0 8px;
    border:1px solid ${props => props.theme.palette.dark_purple};
    border-radius:5px;
    .handle {
      width: 50%;
      height: 100%;
      background: ${props => props.isDark ? "#f2f2f3" : "#fff10e"};
      z-index:10;
      border-radius:5px;
    }
    .moon{
      position:absolute;
      left:5px;
      top:8px;
    }
    .sun{
      position:absolute;
      right:3px;
      top:5px;
    }
  }
  
  
`
const spring = {
  type: "spring",
  stiffness: 300,
  damping: 8
}



const ToggleDarkMode = () => {
  const { state, dispatch } = useContext(Context)
  const [playToggle] = useSound(
    'audio/toggle.mp3', { volume: 0.25 }
  )

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    return (
      playToggle(),
      setIsOn(!isOn),
      dispatch({ type: "TOGGLE_DARK_MODE" })
    )
  }
  const handleKeyDown = (event) => {
    let keyName = event.key
    if (keyName === "D") {
      toggleSwitch()
    }
  }
  return (
    <Classes isDark={state.isDark}>
      <div
        className="switch"
        data-ison={isOn}
        onClick={toggleSwitch}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0">
        <img className="moon" src="img/moonIcon.svg" alt="dark" width="14px" />
        <motion.div className="handle" layout transition={spring} />
        <img className="sun" src="img/sunIcon.svg" alt="light" width="21px" />
      </div>
    </Classes>
  )
}


export default ToggleDarkMode

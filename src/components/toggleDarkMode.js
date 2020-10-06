import React from "react"
import { useState, useContext } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Context from '../store/context'
import useSound from 'use-sound'




const Classes = styled.div`
  position:relative;
  display:flex;
  flex-direction:row;
  .switch {
      width: 55px;
      height: 31px;
      background: #000;
      display: flex;
      justify-content: flex-start;
      cursor: pointer;
      padding-top:3px;
      padding-bottom:2px;
      margin: 0 8px;
  }
  
  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }
  
  .handle {
    width: 25px;
    height: 25px;
    background: #fff;
    z-index:10;
  }
  .moon{
    position:absolute;
    left:13px;
    top:8px;
  }
  .sun{
    position:absolute;
    right:10px;
    top:4px;
  }
`
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
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

  return (
    <Classes isDark={state.isDark}>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch} role="button" tabIndex="0">
        <img className="moon" src="img/moonIcon.svg" alt="dark theme" width="14px" />
        <motion.div className="handle" layout transition={spring} />
        <img className="sun" src="img/sunIcon.svg" alt="dark theme" width="21px" />
      </div>
    </Classes>
  )
}


export default ToggleDarkMode

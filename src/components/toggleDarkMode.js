import React from "react"
import { useState, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import Context from '../store/context'
import useSound from 'use-sound'




const Classes = styled.div`
.switch {
    width: 23px;
    height: 23px;
    display: flex;
    cursor: pointer;
    margin: 0 8px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
  }
  img{
    width:100%;
  }
`
const spring = {
  type: "spring",
  duration: 0.7,
}



const ToggleDarkMode = () => {
  const { state, dispatch } = useContext(Context)
  const [playToggle] = useSound(
    'audio/toggle.mp3', { volume: 0.25 }
  )

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    return (
      dispatch({ type: "TOGGLE_DARK_MODE" }),
      playToggle(),
      setIsOn(!isOn)
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
        data-toggle="tooltip" data-placement="bottom" title={`Activate Dark Mode`}
        tabIndex="0">
        {!state.isDark && (
          <AnimatePresence>
            <motion.img
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={spring}
              src="img/moon.svg"
              alt="dark" />
          </AnimatePresence>
        )}
        {state.isDark && (
          <AnimatePresence>
            <motion.img
              initial={{ opacity: 0, rotate: -23 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={spring}
              src="img/sun.svg"
              alt="light" />
          </AnimatePresence>)
        }
      </div>
    </Classes>
  )
}

export default ToggleDarkMode

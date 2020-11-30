import React from "react"
import { useContext } from "react"
import Context from '../store/context'
// import useSound from 'use-sound'
import { motion } from "framer-motion"




const MenuButton = ({ transition, ...props }) => {
    const { state, dispatch } = useContext(Context)

    const toggleDrawer = () => {
        return dispatch({ type: "TOGGLE_DRAWER" })
    }
    const variant = state.isOpen ? "opened" : "closed";
    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 3,
        }
    };
    const center = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: -3
        }
    };
    const pathProps = {
        initial: "closed",
        animate: variant,
        transition
    };
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="29"
            version="1.1"
            viewBox="0 0 8.202 7.673"
            {...props}
            style={{
                cursor: "pointer"
            }}
            onClick={toggleDrawer}
            tabIndex="1"
        >
            <motion.g
                fill="#684656"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="0.279"
                transform="translate(-79.938 -64.986)"
            >
                <motion.path variants={top} {...pathProps} d="M79.938 65.088l8.197-.102.005 1.22-8.196.103z"></motion.path>
                <motion.path variants={center} {...pathProps} d="M79.938 68.263l8.197-.102.005 1.22-8.196.103z"></motion.path>
                <motion.path variants={bottom} {...pathProps} d="M79.938 71.438l8.197-.102.005 1.22-8.196.103z"></motion.path>
            </motion.g>
        </motion.svg>
    );
}

export default MenuButton;

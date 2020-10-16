import React, { useContext, useState } from "react"
import styled from 'styled-components'
import Context from '../store/context'
import { Link as LNK } from "gatsby"
import "./nav.module.css";

const navigations = [
    {
        name: "HOME",
        to: "/"
    },
    {
        name: "CONTACT",
        to: "/contact"
    },
    {
        name: "POSTS",
        to: "/posts"
    },
    {
        name: "LAB",
        to: "/lab"
    }
]


const NavContainer = styled.nav`
    position:relative;
    padding:16px;
    display: flex;
    flex-direction: row;
    .top_left_corner {
      position:absolute;
      top:-10px;
      left:-10px;
      width:10px;
      height:10px;
      border-top:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-left:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
    .top_right_corner {
      position:absolute;
      top:-10px;
      right:-10px;
      width:10px;
      height:10px;
      border-top:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-right:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
    .bottom_right_corner {
      position:absolute;
      bottom:-10px;
      right:-10px;
      width:10px;
      height:10px;
      border-bottom:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-right:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
    .bottom_left_corner {
      position:absolute;
      bottom:-10px;
      left:-10px;
      width:10px;
      height:10px;
      border-bottom:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-left:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }

`

const Link = ({ to, children }) => {
    return (
        <LNK className="mx-2 py-3" to={to} >
            {children}
        </LNK>
    )
}
const Nav = () => {
    const { state } = useContext(Context)
    return (
        <NavContainer isDark={state.isDark}>
            <div className="top_left_corner"></div>
            <div className="top_right_corner"></div>
            <div className="bottom_right_corner"></div>
            <div className="bottom_left_corner"></div>

            {navigations.map((link, key) => (
                <Link
                    key={key}
                    to={link.to}
                >
                    {link.name}
                </Link>
            ))}
        </NavContainer>
    )
}


export default Nav
import React from "react";
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useContext } from "react"
import Context from '../../store/context'
import { Button as BTN } from '@material-ui/core'

const Button = styled(BTN)`
    position:relative;
    min-width:25px;
    height:25px;
    width:25px;
    overflow:hidden;
    &:focus{
        outline:none;
    }
    path{
        fill:#684656;
    }
`

function HamButton({ transition, ...props }) {
    const { state, dispatch } = useContext(Context)

    const toggleDrawer = () => {
        return dispatch({ type: "TOGGLE_DRAWER" })
    }
    const variant = state.isOpen ? "opened" : "closed";
    const top = {
        t1: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: 3,
            }
        },
        t2: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: 6,
            }
        },
        t3: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: 9,
            }
        },
        t4: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: 12,
            }
        }
    };
    const center = {
        c0: {
            closed: {
                translateY: 0,
                opacity: 1
            },
            opened: {
                translateY: 30,
                opacity: 0
            }
        },
        c1: {
            closed: {
                translateY: 0,
                opacity: 1
            },
            opened: {
                translateY: -30,
                opacity: 0
            }
        },
        c2: {
            closed: {
                translateY: 0,
                opacity: 1

            },
            opened: {
                translateY: 30,
                opacity: 0

            }
        },
        c3: {
            closed: {
                translateY: 0,
                opacity: 1

            },
            opened: {
                translateY: -30,
                opacity: 0

            }
        },
        c4: {
            closed: {
                translateY: 0,
                opacity: 1

            },
            opened: {
                translateY: 30,
                opacity: 0

            }
        }
    };
    const bottom = {
        b1: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: -3,
            }
        },
        b2: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: -6,
            }
        },
        b3: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: -9,
            }
        },
        b4: {
            closed: {
                translateY: 0
            },
            opened: {
                translateY: -12,
            }
        }
    };
    const pathProps = {
        initial: "closed",
        animate: variant,
        transition
    };
    return (
        <Button className="p-0 mx-3" onClick={toggleDrawer} {...props}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56.693"
                height="56.693"
                version="1.1"
                viewBox="0 0 15 15"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    stroke="none"
                    strokeLinecap="round"
                    strokeWidth="0.922"
                    paintOrder="markers fill stroke"
                    transform="translate(-.794 -1.588)"
                >
                    <motion.path fill="red" d="M0.794 1.588H3.794V4.588H0.794z" opacity="1" {...pathProps}></motion.path>
                    <motion.path
                        variants={top.t1}
                        fill="red"
                        d="M3.794 1.588H6.7940000000000005V4.588H3.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path variants={top.t2} fill="red" d="M6.794 1.588H9.794V4.588H6.794z" opacity="1" {...pathProps}></motion.path>
                    <motion.path
                        variants={top.t3}
                        fill="red"
                        d="M9.794 1.588H12.794V4.588H9.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={top.t4}
                        fill="red"
                        d="M12.794 1.588H15.794V4.588H12.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    {/* black black */}
                    {/* <motion.path
                    fill="#000"
                    d="M0.794 4.588H3.794V7.588H0.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M3.794 4.588H6.7940000000000005V7.588H3.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M6.794 4.588H9.794V7.588H6.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M9.794 4.588H12.794V7.588H9.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M12.794 4.588H15.794V7.588H12.794z"
                    opacity="1" {...pathProps}
                ></motion.path> */}
                    <motion.path
                        variants={center.c0}
                        fill="#0f0"
                        d="M0.794 7.588H3.794V10.588000000000001H0.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={center.c1}
                        fill="#0f0"
                        d="M3.794 7.588H6.7940000000000005V10.588000000000001H3.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={center.c2}
                        fill="#0f0"
                        d="M6.794 7.588H9.794V10.588000000000001H6.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={center.c3}
                        fill="#0f0"
                        d="M9.794 7.588H12.794V10.588000000000001H9.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={center.c4}
                        fill="#0f0"
                        d="M12.794 7.588H15.794V10.588000000000001H12.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    {/* black black */}
                    {/* <motion.path
                    fill="#000"
                    d="M0.794 10.588H3.794V13.588H0.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M3.794 10.588H6.7940000000000005V13.588H3.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M6.794 10.588H9.794V13.588H6.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M9.794 10.588H12.794V13.588H9.794z"
                    opacity="1" {...pathProps}
                ></motion.path>
                <motion.path
                    fill="#000"
                    d="M12.794 10.588H15.794V13.588H12.794z"
                    opacity="1" {...pathProps}
                ></motion.path> */}
                    <motion.path
                        fill="#00f"
                        d="M0.794 13.588H3.794V16.588H0.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={bottom.b1}
                        fill="#00f"
                        d="M3.794 13.588H6.7940000000000005V16.588H3.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={bottom.b2}
                        fill="#00f"
                        d="M6.794 13.588H9.794V16.588H6.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={bottom.b3}
                        fill="#00f"
                        d="M9.794 13.588H12.794V16.588H9.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                    <motion.path
                        variants={bottom.b4}
                        fill="#00f"
                        d="M12.794 13.588H15.794V16.588H12.794z"
                        opacity="1" {...pathProps}
                    ></motion.path>
                </g>
            </svg>
        </Button>
    );
}

export default HamButton;

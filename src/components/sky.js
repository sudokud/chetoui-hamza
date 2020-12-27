import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../store/context'
import { motion } from 'framer-motion'
import { M83, M84, M85, M86, M87, M88, M89, M90, M91 } from './tokyo/stars'


const Gradient = styled.div`
   width:100%;
    background: ${props => props.isDark ?
        "linear-gradient(180deg, #162D55 0%, #1C1124 100%)" :
        "linear-gradient(180deg, #4B75E8 3.12%, #54C0FF 57.81%, #F2F2F3 100%)"
    };
    position:absolute;
    height:320px;
    @media(min-width:576px){
        height:430px;
    }
`
const Star = styled(motion.div)`
    width:fit-content;
    height:fit-content;
    top:${props => props.top || "50%"};
    left:${props => props.left || "50%"};
    position:absolute;

`

const Sky = () => {

    const { state } = useContext(Context)

    return (
        <Gradient isDark={state.isDark}>
            {state.isDark &&
                <>
                    <Star
                        animate={{ opacity: 0.3 }}
                        transition={{
                            ease: [0.3, 0.1, 0.7, 1],
                            repeat: Infinity,
                            duration: 1.9
                        }}
                        left="5%" top="20%" >
                        <M83 />
                    </Star>
                    <Star left="15%" top="30%" >
                        <M84 />
                    </Star>
                    <Star left="43%" top="23%" >
                        <M85 />
                    </Star>

                    <Star
                        animate={{ opacity: 0.3 }}
                        transition={{
                            ease: [0.3, 0.1, 0.7, 1],
                            repeat: Infinity,
                            duration: 1.7
                        }}
                        left="70%" top="24%" >
                        <M86 />
                    </Star>
                    <Star
                        animate={{ opacity: 0.3 }}
                        transition={{
                            ease: [0.3, 0.1, 0.7, 1],
                            repeat: Infinity,
                            duration: 2.2
                        }}
                        left="81%" top="31%" >
                        <M86 />
                    </Star>
                    <Star left="85%" top="40%" >
                        <M87 />
                    </Star>
                    <Star left="55%" top="35%" >
                        <M88 />
                    </Star>
                    <Star left="35%" top="54%" >
                        <M89 />
                    </Star>
                    <Star left="75%" top="32%" >
                        <M90 />
                    </Star>
                    <Star left="55%" top="34%" >
                        <M91 />
                    </Star>
                </>
            }
        </Gradient>
    )
}

export default Sky

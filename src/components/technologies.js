import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import Context from '../store/context'
import { motion } from 'framer-motion'
import useSound from 'use-sound'





const Styled = styled.div`
// h2{
//     font-size:42px;
// }
`
const LogoContainer = styled(motion.a)`
    width: 101px;
    height: 75px;
    padding:1rem;
    border-radius:2px;
    position: relative;
    z-index:1;
    transition: all 0.3s ease;
    img {
        width: 100%;
        height: 100%;
    }
    box-shadow:-8px 7px 6px 0 ${props => props.isDark ? "#0e0e0e" : "#808080"};
    &:hover{
        box-shadow:none;
        transform: scale(0.9);
    }
`
const Technolgy = (props) => {
    const { href, src, alt } = props
    const [POP] = useSound(
        'audio/hoverIn.wav', { volume: 0.2 }
    )
    const { state } = useContext(Context)
    return (
        <LogoContainer
            isDark={state.isDark}
            onHoverEnd={() => (POP())}
            href={href}>
            <img src={src} alt={alt} />
        </LogoContainer>
    )
}
const Technologies = () => {


    return (
        <Styled>
            <h2 className="d-block">Technologies i use</h2>
            <Row >
                <Col sm={4}
                    className="my-4 d-flex flex-column align-items-center">
                    <h5>DATA SOURCES</h5>
                    <Technolgy
                        href="https://strapi.io/"
                        src="img/StrapiJS.svg"
                        alt="Strapi"
                    />
                    <Technolgy
                        href="https://www.netlifycms.org/"
                        src="img/NetlifyCMS.svg"
                        alt="Netlify CMS"
                    />
                </Col>
                <Col sm={4}
                    className="my-4 d-flex flex-column align-items-center">
                    <h5>BUILD</h5>
                    <Technolgy
                        href="https://getbootstrap.com/"
                        src="img/Bootstrap.svg"
                        alt="Bootstrap"
                    />
                    <Technolgy
                        href="https://reactjs.org/"
                        src="img/ReactJS.svg" alt="React" />

                    <Technolgy
                        href="https://www.gatsbyjs.com/"
                        src="img/Gatsby_Monogram.svg" alt="Gatsby" />
                    <Technolgy
                        href="https://material-ui.com/"
                        src="img/material-ui.svg" alt="Gatsby" />
                </Col>
                <Col sm={4}
                    className="my-4 d-flex flex-column align-items-center">
                    <h5>DEPLOY 	&amp; CDN</h5>

                    <Technolgy
                        href="https://www.netlify.com/"
                        src="img/Netlify.svg" alt="Netlify" />

                    <Technolgy
                        href="https://github.com/"
                        src="img/GitHub.svg" alt="Github" />
                    <Technolgy
                        href="https://vercel.com/"
                        src="img/vercel.svg" alt="Vercel" />
                </Col>
            </Row>
        </Styled>
    )
}


export default Technologies
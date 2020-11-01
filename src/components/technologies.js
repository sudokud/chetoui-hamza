import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
// import { useContext } from 'react'
// import Context from '../store/context'
import { motion } from 'framer-motion'
import useSound from 'use-sound'






const LogoContainer = styled(motion.a)`
    width:120px;
    height:calc(120px /1.5 );
    background:${props => props.theme.palette.eggplant};
    box-shadow: 
        1px 0px 0px ${props => props.theme.palette.azure},
        0px 1px 0px ${props => props.theme.palette.arctic_lime},
        2px 1px 0px ${props => props.theme.palette.azure},
        1px 2px 0px ${props => props.theme.palette.arctic_lime},
        3px 2px 0px ${props => props.theme.palette.azure},
        2px 3px 0px ${props => props.theme.palette.arctic_lime},
        4px 3px 0px ${props => props.theme.palette.azure},
        3px 4px 0px ${props => props.theme.palette.arctic_lime},
        5px 4px 0px ${props => props.theme.palette.azure},
        4px 5px 0px ${props => props.theme.palette.arctic_lime},
        6px 5px 0px ${props => props.theme.palette.azure},
        5px 6px 0px ${props => props.theme.palette.arctic_lime},
        7px 6px 0px ${props => props.theme.palette.azure};
    & > img {
        width: 100%;
        height: 100%;
    }
    &:hover{
        box-shadow:none;
        transform: translate(7px, 6px);
    }

`
const Technolgy = (props) => {
    const { href, src, alt } = props
    const [POP] = useSound(
        'audio/pop.wav', { volume: 0.1 }
    )
    return (
        <LogoContainer whileHover={() => (POP())}
            href={href}>
            <img src={src} alt={alt} />
        </LogoContainer>
    )
}
const Technologies = () => {


    return (
        <React.Fragment>

            <h2 className="d-block">Technologies i use</h2>
            <Row >

                <Col sm={4}
                    className="my-4 d-flex flex-column align-items-center">
                    <h3>DATA SOURCES</h3>
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
                    className="my-4  d-flex flex-column align-items-center">
                    <h3>BUILD</h3>
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
                    className="my-4  d-flex flex-column align-items-center">
                    <h3>DEPLOY 	&amp; CDN</h3>

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
        </React.Fragment>
    )
}


export default Technologies
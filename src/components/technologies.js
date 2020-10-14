import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
// import { useContext } from 'react'
// import Context from '../store/context'
import useSound from 'use-sound'






const LogoContainer = styled.a`
    border:1px solid #000;
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
const Technologies = () => {

    const [POP] = useSound(
        'audio/pop.wav', { volume: 0.25 }
    )
    return (
        <React.Fragment>

            <h2 className="d-block">Technologies i use</h2>
            <Row >

                <Col sm={4}
                    className="my-4 d-flex flex-column align-items-center">
                    <h2>DATA SOURCES</h2>
                    <LogoContainer
                        href="https://strapi.io/">
                        <img src="img/StrapiJS.svg" alt="Strapi" />
                    </LogoContainer>
                    <LogoContainer
                        href="https://www.netlifycms.org/">
                        <img src="img/NetlifyCMS.svg" alt="Netlify CMS" />
                    </LogoContainer>

                </Col>

                <Col sm={4}
                    className="my-4  d-flex flex-column align-items-center">
                    <h2>BUILD</h2>
                    <LogoContainer
                        href="https://getbootstrap.com/">
                        <img src="img/Bootstrap.svg" alt="Bootstrap" />
                    </LogoContainer>
                    <LogoContainer
                        href="https://reactjs.org/">
                        <img src="img/ReactJS.svg" alt="React" />
                    </LogoContainer>
                    <LogoContainer
                        href="https://www.gatsbyjs.com/">
                        <img src="img/Gatsby_Monogram.svg" alt="Gatsby" />
                    </LogoContainer>
                </Col>

                <Col sm={4}
                    className="my-4  d-flex flex-column align-items-center">
                    <h2>DEPLOY 	&amp; CDN</h2>

                    <LogoContainer
                        href="https://www.netlify.com/" >
                        <img src="img/Netlify.svg" alt="Netlify" />
                    </LogoContainer>
                    <LogoContainer onMouseEnter={() => (POP())}
                        href="https://github.com/" >
                        <img src="img/GitHub.svg" alt="Netlify" />
                    </LogoContainer>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default Technologies
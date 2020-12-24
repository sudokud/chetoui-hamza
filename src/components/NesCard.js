import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import useSound from 'use-sound'


const Card = styled(motion.div)`
    position:relative;
    color:${props => props.theme.palette.arctic_lime};
    width:300px;
    height:450px;
    background:linear-gradient(180deg, #684656, #684656 );
    padding:16px;
    box-shadow:-16px 14px 6px 0 ${props => props.isDark ? "#0e0e0e" : "#808080"};
    &:after{
        content:"";
        position:absolute;
        bottom:-10px;
        left:0px;
        width:300px;
        height:10px;
        background: #402b35;
        transition: all 0.3s ease;
    }
    &:hover{
        box-shadow:none;
        transform: scale(0.97) translate(0px, 10px);
    }
    &:hover:after{
        transform: translate(0px, -11px);
        height:0;
    }
    transition: all 0.3s ease;
`
const CardBody = styled.div`
    width:100%;
    clip-path: polygon(0% 0%, 100% 0, 100% 75%, 0% 99%);
    .published{
        color:${props => props.theme.palette.cultured};
        font-size:13px;
    }
    padding:15px 0 0 0;
`
const CardFooter = styled.div`
    width:100%;
    .footer-content{
        transform: rotate3D(0, 0, 1, -9.7deg);
        transform-origin:left top;
    }
    .title{
        color:${props => props.theme.palette.arctic_lime};
    }

`


const NesCard = ({ thumbnail, title, slug, excerpt, published }) => {
    const { state } = useContext(Context)
    const [POP] = useSound(
        'audio/hoverIn.wav', { volume: 0.5 }
    )
    return (
        <Link to={`${slug}`}>
            <Card isDark={state.isDark}
                onHoverEnd={() => (POP())}
            >
                <CardBody>
                    <time className="published"> {published} </time>
                    <Img fluid={thumbnail} alt="blog post picture" />
                </CardBody>
                <CardFooter>
                    <div className="footer-content">
                        <h3 className="title">{title}</h3>
                        <p className="excerpt"> {excerpt} </p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default NesCard
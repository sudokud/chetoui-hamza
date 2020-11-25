import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Card = styled.div`
    position:relative;
    font-family:${props => props.theme.fonts.secondary};
    color:${props => props.theme.palette.arctic_lime};
    width:300px;
    height:450px;
    background:#004187;
    border:4px solid #004187;
    padding:4px;
    box-shadow:-16px 14px 6px 0 ${props => props.isDark ? "#0e0e0e" : "#808080"};
    &:after{
        content:"";
        position:absolute;
        bottom:-14px;
        left:-4px;
        width:300px;
        height:10px;
        background:${props => props.isDark ? "#00070e" : "#00244a"};
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
    height:61%;
    overflow:hidden;
`
const Text = styled.div`
    padding:8px;
`
const CardFooter = styled.div`
    position:absolute;
    bottom:0;
    width:calc(100% - 8px);
    height:50%;
    padding:8px;
    z-index:5;
    background:#001327;
    overflow:hidden;
`


const PixelCard = ({ thumbnail, title, slug, excerpt, published }) => {
    const { state } = useContext(Context)
    return (
        <Link to={`/${slug}`}>
            <Card isDark={state.isDark}>
                <Text>
                    {published}
                </Text>
                <CardBody>
                    <Img fluid={thumbnail} alt="blog post picture" />
                </CardBody>
                <CardFooter>
                    <h4>{title}</h4>
                    <p>{excerpt}</p>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default PixelCard
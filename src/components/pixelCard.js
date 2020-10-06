import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Card = styled.div`
    position:relative;
    font-family:${props => props.theme.fonts.secondary};
    color:${props => props.theme.palette.try_this_green};
    box-shadow:-16px 8px 6px 0 ${props => (props.isDark ? "#0e0912" : "#a4a0a7")};
    width:300px;
    height:320px;
    border: 4px solid ${props => props.theme.palette.secondary};
    background:${props => props.theme.palette.secondary};
    &:after{
        content:"";
        position:absolute;
        bottom:-14px;
        left:-4px;
        width:300px;
        height:10px;
        background:#2a1c22;

    }

`
const CardBody = styled.div`
    position:absolute;
    right:0;
    width:90%;
    height:100%;
    background:inherit;
    border: 2px solid #000000;
`
const Text = styled.div`
    position:absolute;
    top:90px;
    left:-66px;
    z-index:10;
    transform:rotateZ(90deg);
`
const CardFooter = styled.div`
    position:absolute;
    bottom:2px;
    right:0;
    width:90%;
    height:120px;
    padding:8px;
    overflow:hidden;
    background:#000000;
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;

`
const PixelCard = ({ thumbnail, title, slug, excerpt, published }) => {
    const { state } = useContext(Context)
    return (
        <motion.div

            whilehover={{
                y: 16,
                transition: { duration: 0.3 },
            }}>
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
        </motion.div>
    )
}
export default PixelCard
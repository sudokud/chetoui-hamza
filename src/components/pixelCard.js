import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import { Container } from 'react-bootstrap'
import styled from 'styled-components'



const Card = styled.div`
    font-family:${props => props.theme.fonts.secondary};
    position:relative;
    color:${props => props.theme.palette.try_this_green};
    width:300px;
    height:320px;
    border: 4px solid ${props => props.theme.palette.secondary};
    background:#684656;

`
const CardBody = styled.div`
    position:absolute;
    top:-8px;
    width:100%;
    height:calc(320px / ${props => props.theme.golden_ratio});
    background:#222;
    border: 4px solid ${props => props.theme.palette.secondary};
`
const Text = styled.div`
    position:absolute;
    top:0;
    z-index:10;
`
const CardFooter = styled.div`
    position:absolute;
    top:calc(320px / ${props => props.theme.golden_ratio} - 8px);
    width:100%;
    height:calc(320px - 320px / ${props => props.theme.golden_ratio} + 8px);
    background:${props => props.theme.palette.secondary};
    border: 4px solid #684656;

`
const PixelCard = ({ thumbnail, title, slug, excerpt, published }) => {
    return (
        <Link to={`/${slug}`}>
            <Card>
                <CardBody>
                    <Text>
                        <h4>{title}</h4>
                        <p>{excerpt}</p>
                    </Text>
                    <Img fluid={thumbnail} alt="blog post picture" />
                </CardBody>
                <CardFooter>
                    {published}
                </CardFooter>
            </Card>
        </Link>
    )
}
export default PixelCard
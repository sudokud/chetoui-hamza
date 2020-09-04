import React from 'react'
import { Card as C, Button } from 'react-bootstrap'
import Img from 'gatsby-image'
const Card = ({ title, slug, date, description, thumbnail }) => {
    return (
        <C style={{ width: '18rem' }}>
            <C.Img as={Img} variant="top" fluid={thumbnail} />
            <C.Body>
                <C.Title>{title}</C.Title>
                <C.Text>
                    {description}
                </C.Text>
                <Button href={`/${slug}`} variant="primary">read more</Button>
            </C.Body>
            <C.Footer className="text-muted">{date}</C.Footer>
        </C>
    )
}
export default Card
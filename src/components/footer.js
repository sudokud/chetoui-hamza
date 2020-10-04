import React from "react"
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'




const Classes = styled.div`
  .container{
   padding:32px;
   margin-top:32px;
  }
`

const Footer = () => {

    return (
        <Classes>
            <Container fluid="lg" className="container">
                <Row className="d-flex justify-content-center">
                    <p>
                        © chetoui hamza 2020 All right reserved
                    </p>
                </Row>
                <Row className="d-flex justify-content-center">
                    <a href="/terms">
                        Terms
                    </a>
                    &nbsp;/&nbsp;
                    <a href="/privacy">
                        privacy
                    </a>
                </Row>
            </Container>
        </Classes>
    )
}


export default Footer

import React from 'react'
import styled from 'styled-components'
import Tokyo from './tokyo/tokyo'

const MainWrapper = styled.div`
    margin:auto;
    max-width: 1279px;
    padding-top:2rem;
    @media(min-width:996px){
        padding-top:7rem;
    }
`
const Scene = () => {
    return (
        <MainWrapper>
            <Tokyo />
        </MainWrapper>
    )
}
export default Scene
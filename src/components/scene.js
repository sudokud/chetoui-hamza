import React from 'react'
import styled from 'styled-components'
import Tokyo from './tokyo/tokyo'

const MainWrapper = styled.div`
    margin-left:auto;
    padding-top: 96px;
    max-width: 1279px;
`
const Scene = () => {
    return (
        <MainWrapper>
            <Tokyo />
        </MainWrapper>
    )
}
export default Scene
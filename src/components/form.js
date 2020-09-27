import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import Btn from '../components/button'
import Context from '../store/context'


const Faurme = styled.form`
    border: 1px solid grey;
`
const FaurmeGroup = styled.div`
    display:flex;
    flex-direction:column;
    padding:24px 0;
    width:256px;
    & > label {
        font-size:${props => props.theme.golden_ratio}rem;
    }
    & > input {
        background:${props => props.theme.light.background};
        border: 1px solid #777;
        padding: 4px 12px;
        &: focus{
            border-radius: 0px;
            outline-style: solid;
            outline-color: ${props => props.theme.palette.try_this_green};
            outline-width: 1px;
            outline-offset: 1px;
        }
    }
`
const Form = () => {
    const { state, dispatch } = useContext(Context)
    return (
        <Faurme className="p-5">
            <FaurmeGroup>
                <label for="name"> <span>&gt;</span> Name</label>
                <input type="text" name="name" id="name" placeholder="----------------" />
            </FaurmeGroup>
            <FaurmeGroup>
                <label for="email"> <span>&gt;</span> Email</label>
                <input type="email" name="email" id="email" placeholder="----------------" />
            </FaurmeGroup>
            <FaurmeGroup>
                <Btn text="submit" type="submit" />
            </FaurmeGroup>
        </Faurme>
    )
}
export default Form 
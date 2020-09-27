import React from 'react'
import styled from 'styled-components'
import Btn from '../components/button'



const Faurme = styled.form`
    border: 1px solid grey;
    box-shadow: 2px 2px 0px 0px grey, -2px -2px 0px 0px grey;

`
const FaurmeGroup = styled.div`
    display:flex;
    flex-direction:column;
    padding:16px 0;
    width:256px;
    & > label {
        font-size:1rem;
    }
    & > input {
        font-size:1rem;
        background:${props => props.theme.light.background};
        border: 1px solid ${props => props.theme.dark.background};;
        padding: 4px 12px;
        &: focus{
            border-radius: 0px;
            outline-style: solid;
            outline-color: ${props => props.theme.palette.try_this_green};
            outline-width: 1px;
            outline-offset: 1px;
        }
    }
    & > textarea {
        font-size:1rem;
        background:${props => props.theme.light.background};
        border: 1px solid ${props => props.theme.dark.background};;
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

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return (
        <Faurme
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="p-5">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                    don't fill this out: <input name="bot-field" />
                </label>
            </p>
            <FaurmeGroup>
                <label htmlFor="name"> <span>&gt;</span> Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="full name"
                    required
                />
            </FaurmeGroup>
            <FaurmeGroup>
                <label htmlFor="email"> <span>&gt;</span> Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email@sample.xyz"
                    required
                />
            </FaurmeGroup>
            <FaurmeGroup>
                <label htmlFor="email"> <span>&gt;</span> Email</label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Hello world"
                    required
                />
            </FaurmeGroup>
            <FaurmeGroup>
                <Btn text="submit" type="submit" />
            </FaurmeGroup>
        </Faurme>
    )
}
export default Form 
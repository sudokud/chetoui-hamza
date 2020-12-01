import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import styled from 'styled-components'
import RetroButton from './retroButton'
import useSound from 'use-sound'
import FancadeButton from './fancade-style-button'


const Faurme = styled.form`
    position:relative;
    width:100%;
    box-shadow:-16px 8px 6px 0 ${props => (props.isDark ? "#0e0912" : "#a4a0a7")};
    background:${props => (props.isDark ? "#1c1124ff" : "#f2f2f3fe")};
    &:after{
        content:" ";
        position:absolute;
        left:0;
        bottom:0;
        height:8px;
        width:100%;
        background:${props => (props.isDark ? "#020102" : "#87818b")};
    }
    @media (min-width: 768px) { width:61%; }

`
const FaurmeGroup = styled.div`
    display:flex;
    flex-direction:column;
    padding:16px 0;
    min-width:256px;
    & > label {
        font-size:1.4rem;
    }
    & > input {
        font-size:1rem;
        background:${props => props.theme.light.background};
        border: 1px solid ${props => props.theme.dark.background};;
        padding: 4px 12px;
        &: focus{
            border-radius: 0px;
            outline-style: solid;
            outline-color: ${props => props.theme.palette.arctic_lime};
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
            outline-color: ${props => props.theme.palette.arctic_lime};
            outline-width: 1px;
            outline-offset: 1px;
        }
    }
    sup{
        color:${props => props.theme.palette.eggplant};
    }
`
const Form = () => {
    const { state } = useContext(Context)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    const [playkeySound] = useSound(
        'audio/key_tap.wav', { volume: 0.25 }
    )
    return (
        <Faurme
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="p-4 pt-1"
            isDark={state.isDark}
        >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                    don't fill this out: <input name="bot-field" />
                </label>
            </p>
            <FaurmeGroup>
                <label htmlFor="name"> <span>&gt;</span> Name <sup>required</sup></label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="full name"
                    required
                    onChange={() => (playkeySound())}
                />
            </FaurmeGroup>
            <FaurmeGroup>
                <label htmlFor="email"> <span>&gt;</span> Email <sup>required</sup></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email@sample.xyz"
                    required
                    onChange={() => (playkeySound())}

                />
            </FaurmeGroup>
            <FaurmeGroup>
                <label htmlFor="object"> <span>&gt;</span> object <sup>optional</sup></label>
                <textarea
                    rows="1"
                    type="text"
                    name="object"
                    id="object"
                    placeholder="my object"
                    onChange={() => (playkeySound())}

                />
            </FaurmeGroup>
            <FaurmeGroup>
                <label htmlFor="message"> <span>&gt;</span> Message <sup>required</sup></label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Hello world"
                    required
                    onChange={() => (playkeySound())}
                />
            </FaurmeGroup>
            <FaurmeGroup>
                {/* <RetroButton type="submit" text="Send Message" /> */}
                <FancadeButton type="submit" text="Send Message" />
            </FaurmeGroup>
        </Faurme>
    )
}
export default Form 
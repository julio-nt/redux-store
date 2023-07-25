import { styled } from "styled-components";

export const Add = styled.button`
    width: 45px;
    height: 40px;
    transition: width 1s;
    background-color: black;
    color: white;
    border: black;
    text-transform: uppercase;
    text-align: left;
    padding-left: .5rem;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
        background-color: #4a4a4a;
    }
`

export const Span = styled.span`
    position: absolute;
    opacity: 0;
    transition: ease-in opacity .2s;
    margin-left: .2rem;
`

export const ValuesContainer = styled.div`
    opacity: 0;
    visibility: hidden;
    transform: translateY(130%);
    transition: opacity 1s, visibility 1s, transform 1s;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-top: .5rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 600px;
    &:hover ${ValuesContainer} {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    &:hover ${Add} {
        opacity: 1;
        width: 50%;
    }
    &:hover ${Span} {
        opacity: 1;
        transition: .2s;
        transition-delay: 1s;
    }
`

export const Thumbnail = styled.img`
    width: 300px;
    height: 340px;
    object-fit: cover;
    border-radius: 15px;
`

export const Name = styled.h3`
    font-size: 1.5rem;
`

export const Description = styled.p`
    color: gray;
    max-width: 300px;
`



export const ValueBox = styled.div`
    text-align: center;
`

export const Values = styled.p`
    font-size: 1rem;
    color: gray;
`
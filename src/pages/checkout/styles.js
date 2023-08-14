import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
`

export const Title = styled.h3`
    background-color: black;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const Input = styled.div`
    width: 16rem;
    padding-top: 1rem;
`

export const Required = styled.span`
    color: red;
`

export const Button = styled.button`
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding: .5rem;
    border: none;
    cursor: pointer;
    width: fit-content;
    &:hover {
        background-color: #4a4a4a;
    }
    margin-left: 2rem;
    margin-top: 2rem;
`

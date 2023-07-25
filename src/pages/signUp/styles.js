import { styled } from 'styled-components'

export const Container = styled.div`
    border: 2px solid gray;
    padding: 4rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
`

export const Title = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
`

export const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`

export const Input = styled.input`
    padding: .5rem;
`

export const Button = styled.button`
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding: .5rem;
    border: none;
    cursor: pointer;
    margin-left: 41%;
    margin-top: 1.5rem;
    &:hover {
        background-color: #4a4a4a;
    }
`
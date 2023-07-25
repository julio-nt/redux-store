import { styled } from 'styled-components'

export const Form = styled.div`
    border: 2px solid gray;
    padding: 4rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
`

export const Title = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
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
    &:hover {
        background-color: #4a4a4a;
    }
`
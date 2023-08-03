import { styled } from 'styled-components'

export const Container = styled.div`
    border: 2px solid gray;
    padding: 2rem 4rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
`

export const Title = styled.h3`
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
`

export const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
`

export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`

export const Button = styled.button`
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding: .5rem;
    border: none;
    cursor: pointer;
    width: 75px;
    &:hover {
        background-color: #4a4a4a;
    }
`

export const Input = styled.input`
    padding: .5rem;
`

export const Required = styled.span`
    color: red;
`
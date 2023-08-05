import { styled } from "styled-components";

export const Card = styled.div`
    @media (max-width: 1135px) {
        margin-left: 4rem;
        margin-top: 2rem;
    };
    @media (max-width: 445px){
        margin-left: -1.5rem;
    }
`

export const CardFront = styled.div`
    width: 300px;
    height: 150px;
    background-color: orange;
    border-radius: 10px;
    position: relative;
    border: 2px solid black;
    @media (min-width: 445px) {
        right: 4rem;
    }
`

export const CardBack = styled.div`
    width: 300px;
    height: 150px;
    background-color: orange;
    border-radius: 10px;
    position: relative;
    margin-top: 1rem;
    border: 2px solid black
    
`

export const CardNumber = styled.p`
    position: absolute;
    top: 40%;
    left: 10%;
    font-size: 1.3rem;
`

export const CardHolder = styled.p`
    position: absolute;
    top: 70%;
    left: 10%;
    text-transform: uppercase;
    font-size: .8rem;
`

export const Expire = styled.p`
    position: absolute;
    top: 70%;
    left: 80%;
    font-size: .8rem;
`

export const BlackLine = styled.div`
    background-color: black;
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
`

export const Cvv = styled.p`
    background-color: lightgray;
    max-width: 30px;
    min-height: 20px;
    text-align: center;
    padding: 5px 10px;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 1rem;
`

export const Input = styled.input`
    padding: .5rem;
    width: 90%;
`
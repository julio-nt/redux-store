import { styled } from "styled-components";

export const Container = styled.div`
    overflow-x: auto;
`

export const HeadingRow = styled.tr`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`

export const Image = styled.th`
    width: 5rem;
    padding: 1rem;
`

export const Header = styled.th`
    width: 10rem;
    padding: 1rem;
`

export const Trash = styled.th`
    width: 2rem;
    padding: 1rem;
`

export const Total = styled.p`
    background-color: black;
    color: white;
    text-transform: uppercase;
    width: fit-content;
    padding: 1rem;
    font-weight: 600;
    @media (min-width: 1013px){
    margin-left: 76.5%;
    }
`
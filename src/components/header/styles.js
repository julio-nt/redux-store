import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-bottom: 1px solid gray;
    ${'' /* padding-left: 2rem; */}
`

export const Button = styled.button`
    text-transform: uppercase;
    text-decoration: none;
    color: #222222;
    border: none;
    background-color: white;
    cursor: pointer;
`

export const Links = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #222222;
`

export const EndButtons = styled.div`
    display: flex;
    gap: 2rem;
    margin-right: 2rem;
`
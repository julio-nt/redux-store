import React from 'react'
import Header from '../../components/header/Header'
import { styled } from 'styled-components'
import Products from './components/products/Products'

const Container = styled.div`
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
`

export default function Home() {

    return (
        <Container>
            <Header />
            <Products />
        </Container>
    )
}

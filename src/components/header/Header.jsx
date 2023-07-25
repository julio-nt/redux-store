import React, { useState } from 'react'
import * as Styled from './styles'
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux'

import { selectProductsCount } from '../../redux/cart/cart.selectors'

export default function Header() {
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const productsCount = useSelector(selectProductsCount)

    const handleCartClick = () => {
        setCartIsOpen(true)
    }

    return (
        <Styled.NavBar>
            <Styled.Button style={{ paddingLeft: '2rem' }}><Styled.Links to='/'>Home</Styled.Links></Styled.Button>
            <Styled.EndButtons>
                <Styled.Button><Styled.Links to='/login'>Login</Styled.Links></Styled.Button>
                <Styled.Button onClick={handleCartClick}>Cart({productsCount})</Styled.Button>
            </Styled.EndButtons>

            <Cart isVisible={cartIsOpen} setIsVisible={setCartIsOpen} />
        </Styled.NavBar>
    )
}

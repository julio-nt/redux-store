import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { styled } from 'styled-components'

import * as Styled from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/user/slice'

const Container = styled.div`
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
`

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { currentUser } = useSelector(state => state.userReducer)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch(login({ email: email, password: password }))
        navigate('/')
    }

    return (
        <Container>
            <Header />
            <Styled.Form>
                <Styled.Title>Login</Styled.Title>
                <Styled.ContainerInput>
                    <label for='email'>Email:</label>
                    <Styled.Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Styled.ContainerInput>
                <Styled.ContainerInput>
                    <label for='password'>Password:</label>
                    <Styled.Input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Styled.ContainerInput>
                <Styled.Button onClick={handleLogin}>Login</Styled.Button>
                <p>Don't have an account? Create one <Link to='/signup'>here</Link></p>
            </Styled.Form>
        </Container>
    )
}

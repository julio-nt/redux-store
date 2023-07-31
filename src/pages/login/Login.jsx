import React, { useState } from 'react'
import Header from '../../components/header/Header'

import * as Styled from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user/slice'


export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        dispatch(login({ email: email, password: password }))
        navigate('/')
    }

    return (
        <>
            <Header />
            <Styled.Form>
                <Styled.Title>Login</Styled.Title>
                <Styled.ContainerInput>
                    <label htmlFor='email'>Email:</label>
                    <Styled.Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Styled.ContainerInput>
                <Styled.ContainerInput>
                    <label htmlFor='password'>Password:</label>
                    <Styled.Input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Styled.ContainerInput>
                <Styled.Button onClick={handleLogin}>Login</Styled.Button>
                <p>Don't have an account? Create one <Link to='/signup'>here</Link></p>
            </Styled.Form>
        </>
    )
}

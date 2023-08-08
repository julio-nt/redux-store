import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'

import * as Styled from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/user/slice'
import Input from '../../components/input/Input'


export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { currentUser } = useSelector(state => state.userReducer)

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (loading === false && currentUser) {
            navigate('/')
        }
    }, [loading, currentUser, navigate])


    const handleLogin = () => {
        setLoading(true)
        dispatch(login({ email: email.toLowerCase(), password: password }))
        setLoading(false)
    }

    return (
        <>
            <Header />
            <Styled.Form>
                <Styled.Title>Login</Styled.Title>
                <Styled.ContainerInput>
                    <Input type='email' legend='Email' value={email} setValue={setEmail} />
                </Styled.ContainerInput>
                <Styled.ContainerInput>
                    <Input type='password' legend='password' value={password} setValue={setPassword} />
                </Styled.ContainerInput>
                <Styled.Button onClick={handleLogin}>Login</Styled.Button>
                <p>Don't have an account? Create one <Link to='/signup'>here</Link></p>
            </Styled.Form>
        </>
    )
}

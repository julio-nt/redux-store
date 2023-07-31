import React, { useState } from 'react'
import Input from './components/Input'
import Header from '../../components/header/Header'

import * as Styled from './styles'
import { useDispatch } from 'react-redux'

import { register } from '../../redux/user/slice'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')
    // const [country, setCountry] = useState('')
    // const [state, setState] = useState('')
    // const [city, setCity] = useState('')

    const handleRegister = () => {
        if (firstName === '') {
            alert(`First name can't be empty.`)
        }
        else if (lastName === '') {
            alert(`Last name can't be empty.`)
        }
        else if (email === '') {
            alert(`Email name can't be empty.`)
        }
        else if (password === '') {
            alert(`Password name can't be empty.`)
        }
        else {
            dispatch(register({
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
                address: address,
                extraAddress: extraAddress
            }))
            navigate('/login')
        }
    }

    return (
        <>
            <Header />
            <Styled.Container>
                <Styled.Title>Sign Up</Styled.Title>
                <Styled.Form>
                    <div>
                        <Input type='text' legend='Name' value={firstName} setValue={setFirstName} />
                        <Input type='text' legend='Lastname' value={lastName} setValue={setLastName} />
                        <Input type='email' legend='Email' value={email} setValue={setEmail} />
                        <Input type='password' legend='password' value={password} setValue={setPassword} />
                    </div>
                    <div>
                        <Input type='text' legend='Address' value={address} setValue={setAddress} />
                        <Input type='text' legend='Apt, Block, etc' value={extraAddress} setValue={setExtraAddress} />
                    </div>
                </Styled.Form>
                <Styled.Button onClick={handleRegister}>Register</Styled.Button>
            </Styled.Container>
        </>
    )
}

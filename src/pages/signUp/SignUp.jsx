import React, { useState } from 'react'
import Input from '../../components/input/Input'
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
    const [id, setId] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')

    const handleRegister = () => {
        if (firstName === '') {
            alert(`First name can't be empty.`)
        }
        else if (lastName === '') {
            alert(`Last name can't be empty.`)
        }
        else if (id === '') {
            alert(`ID can't be empty.`)
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
                id: id,
                email: email.toLowerCase(),
                password: password,
                address: address,
                extraAddress: extraAddress,
                phone: phone,
                country: country,
                state: state,
                city: city,
                cards: []
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
                        <Input type='text' legend='Name' value={firstName} setValue={setFirstName} required />
                        <Input type='text' legend='Lastname' value={lastName} setValue={setLastName} required />
                        <Input type='text' legend='ID' value={id} setValue={setId} required />
                        <Input type='text' legend='Phone' value={phone} setValue={setPhone} />
                        <Input type='email' legend='Email' value={email} setValue={setEmail} required />
                        <Input type='password' legend='password' value={password} setValue={setPassword} required />
                    </div>
                    <div>
                        <Input type='text' legend='Country' value={country} setValue={setCountry} />
                        <Input type='text' legend='State' value={state} setValue={setState} />
                        <Input type='text' legend='City' value={city} setValue={setCity} />
                        <Input type='text' legend='Address' value={address} setValue={setAddress} />
                        <Input type='text' legend='Apt, Block, etc' value={extraAddress} setValue={setExtraAddress} />
                    </div>
                </Styled.Form>
                <Styled.Button onClick={handleRegister}>Register</Styled.Button>
            </Styled.Container>
        </>
    )
}

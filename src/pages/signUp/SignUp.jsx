import React, { useState } from 'react'
import Input from './components/Input'
import Header from '../../components/header/Header'

import * as Styled from './styles'

export default function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')
    // const [country, setCountry] = useState('')
    // const [state, setState] = useState('')
    // const [city, setCity] = useState('')

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
                <Styled.Button>Register</Styled.Button>
            </Styled.Container>
        </>
    )
}

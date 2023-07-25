import React, { useState } from 'react'
import Input from './components/Input'

export default function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')

    return (
        <div>
            <div>
                <Input legend='Name' value={firstName} setValue={setFirstName} />
            </div>
        </div>
    )
}

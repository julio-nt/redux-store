import * as PageStyles from '../../styles'
import Input from '../../../../components/input/Input'

import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Shipment() {
    const { currentUser } = useSelector(state => state.userReducer)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')

    const handleCheckbox = (e) => {
        if (e.target.checked === true) {
            setName(`${currentUser.firstname} ${currentUser.lastname}`)
            setEmail(currentUser.email)
            setId(currentUser.id)
            setPhone(currentUser.phone ? currentUser.phone : phone)
            setCountry(currentUser.country ? currentUser.country : country)
            setState(currentUser.state ? currentUser.state : state)
            setCity(currentUser.city ? currentUser.city : city)
            setAddress(currentUser.address ? currentUser.address : address)
            setExtraAddress(currentUser.extraAddress ? currentUser.extraAddress : extraAddress)
        }
    }

    return (
        <>
            <PageStyles.Title>Delivery information</PageStyles.Title>
            <PageStyles.Container>
                <div>
                    <PageStyles.Input>
                        <Input type='text' legend='Full name' value={name} setValue={setName} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='email' legend='Email' value={email} setValue={setEmail} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Id' value={id} setValue={setId} required />
                    </PageStyles.Input>
                </div>
                <div>
                    <PageStyles.Input>
                        <Input type='text' legend='Phone number' value={phone} setValue={setPhone} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Country' value={country} setValue={setCountry} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='State' value={state} setValue={setState} required />
                    </PageStyles.Input>
                </div>
                <div>
                    <PageStyles.Input>
                        <Input type='text' legend='City' value={city} setValue={setCity} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Address' value={address} setValue={setAddress} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Apt, block, etc' value={extraAddress} setValue={setExtraAddress} />
                    </PageStyles.Input>
                </div>
            </PageStyles.Container>
            <div style={{ paddingLeft: '2rem', paddingTop: '1rem' }}>
                <input type='checkbox' id='fill' onChange={handleCheckbox} />
                <label htmlFor='fill'> Fill with my account information.</label>
            </div>
        </>
    )
}

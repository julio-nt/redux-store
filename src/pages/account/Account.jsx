import * as Styled from './styles'
import Header from '../../components/header/Header'
import { useDispatch, useSelector } from 'react-redux'

import { logout, edit } from '../../redux/user/slice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PaymentMethod from './components/payment-method/PaymentMethod'

export default function Account() {
    const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)

    const [firstname, setFirstname] = useState(currentUser.firstname)
    const [lastname, setLastname] = useState(currentUser.lastname)
    const [email, setEmail] = useState(currentUser.email)
    const [address, setAddress] = useState(currentUser.address)
    const [extraAddress, setExtraAddress] = useState(currentUser.extraAddress)
    const [phone, setPhone] = useState(currentUser.phone)
    const [country, setCountry] = useState(currentUser.country)
    const [state, setState] = useState(currentUser.state)
    const [city, setCity] = useState(currentUser.city)

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    const handleSave = () => {
        if (firstname === '') {
            alert(`Name can't be empty.`)
        } else if (lastname === '') {
            alert(`Last name can't be empty.`)
        } else if (email === '') {
            alert(`Email can't be empty.`)
        } else {
            dispatch(edit({
                firstname: firstname,
                lastname: lastname,
                email: email,
                address: address,
                extraAddress: extraAddress,
                phone: phone,
                country: country,
                state: state,
                city: city,
            }))
            setIsEditing(false)
            console.log(currentUser)
        }
    }

    return (
        <>
            <Header />
            <Styled.Container>
                <Styled.Title>My account</Styled.Title>
                <Styled.Info>
                    <Styled.InfoColumn>
                        <div>
                            <b>Name <Styled.Required>*</Styled.Required></b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Last name <Styled.Required>*</Styled.Required></b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Email <Styled.Required>*</Styled.Required></b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='email' value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Phone</b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={phone} onChange={(e) => setPhone(e.target.value)} /></p>
                        </div>
                    </Styled.InfoColumn>
                    <Styled.InfoColumn>
                        <div>
                            <b>Country</b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={country} onChange={(e) => setCountry(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>State</b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={state} onChange={(e) => setState(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>City</b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={city} onChange={(e) => setCity(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Address</b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={address} onChange={(e) => setAddress(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Address line 2</b>
                            <p><Styled.Input disabled={isEditing ? false : true} type='text' value={extraAddress} onChange={(e) => setExtraAddress(e.target.value)} /></p>
                        </div>
                    </Styled.InfoColumn>
                </Styled.Info>
                <Styled.ButtonContainer>
                    {isEditing ?
                        <Styled.Button onClick={handleSave}>Save</Styled.Button>
                        :
                        <Styled.Button onClick={() => setIsEditing(true)}>Edit</Styled.Button>
                    }
                    <Styled.Button onClick={handleLogout}>Logout</Styled.Button>
                </Styled.ButtonContainer>
            </Styled.Container>
            {/* PAYMENT */}
            <PaymentMethod />
        </>
    )
}

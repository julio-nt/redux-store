import * as Styled from './styles'
import Header from '../../components/header/Header'
import { useDispatch, useSelector } from 'react-redux'

import { logout, edit } from '../../redux/user/slice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

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

    return (
        <>
            <Header />
            <Styled.InfoContainer>
                <Styled.Title>My account</Styled.Title>
                <p><b>Name: </b> {isEditing ? <Styled.Input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} /> : currentUser.firstname}</p>
                <p><b>Last name: </b> {isEditing ? <Styled.Input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} /> : currentUser.lastname}</p>
                <p><b>Email:</b> {isEditing ? <Styled.Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /> : currentUser.email}</p>
                <p><b>Phone:</b> {isEditing ? <Styled.Input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} /> : currentUser.phone}</p>
                <p><b>Country:</b> {isEditing ? <Styled.Input type='text' value={country} onChange={(e) => setCountry(e.target.value)} /> : currentUser.country}</p>
                <p><b>State:</b> {isEditing ? <Styled.Input type='text' value={state} onChange={(e) => setState(e.target.value)} /> : currentUser.state}</p>
                <p><b>City:</b> {isEditing ? <Styled.Input type='text' value={city} onChange={(e) => setCity(e.target.value)} /> : currentUser.city}</p>
                <p><b>Address:</b> {isEditing ? <Styled.Input type='text' value={address} onChange={(e) => setAddress(e.target.value)} /> : currentUser.address}</p>
                <p><b>Address line 2:</b> {isEditing ?
                    <Styled.Input type='text' value={extraAddress} onChange={(e) => setExtraAddress(e.target.value)} />
                    : currentUser.extraAddress}</p>
                <Styled.ButtonContainer>
                    {isEditing ?
                        <Styled.Button onClick={handleSave}>Save</Styled.Button>
                        :
                        <Styled.Button onClick={() => setIsEditing(true)}>Edit</Styled.Button>
                    }
                    <Styled.Button onClick={handleLogout}>Logout</Styled.Button>
                </Styled.ButtonContainer>
            </Styled.InfoContainer>
        </>
    )
}

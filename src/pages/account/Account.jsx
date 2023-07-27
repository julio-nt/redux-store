import { styled } from 'styled-components'
import * as Styled from './styles'
import Header from '../../components/header/Header'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../../redux/user/slice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
`

export default function Account() {
    const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <Container>
            <Header />
            <Styled.InfoContainer>
                <Styled.Title>{`${currentUser.firstname} ${currentUser.lastname}`}</Styled.Title>
                <p><b>Email:</b> {currentUser.email}</p>
                <p><b>Address:</b> {currentUser.address}</p>
                {currentUser.extraAddress ?
                    <p><b>Extra address:</b> {currentUser.extraAddress}</p>
                    : null
                }
                <Styled.Button onClick={handleLogout}>Logout</Styled.Button>
            </Styled.InfoContainer>
        </Container>
    )
}

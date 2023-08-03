import { useState } from 'react'
import * as Styled from '../../styles'
import { useSelector } from 'react-redux'

export default function PaymentMethod() {
    const { currentUser } = useSelector(state => state.userReducer)

    const [isCreatingCard, setIsCreatingCard] = useState(false)

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [cardExpires, setCardExpires] = useState('')
    const [cardCvv, setCardCvv] = useState('')

    const handleAddCard = () => {
        setIsCreatingCard(true)
    }

    const handleSaveCard = () => {
        setIsCreatingCard(false)
    }

    return (
        <Styled.Container>
            <Styled.Title>Payment methods</Styled.Title>
            {currentUser.card ?
                <p>Card on</p>
                :
                <p>No cards</p>
            }
            {isCreatingCard ?
                <Styled.Info>
                    <Styled.InfoColumn>
                        <div>
                            <b>Card name <Styled.Required>*</Styled.Required></b>
                            <p><Styled.Input type='text' value={cardName} onChange={(e) => setCardName(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Card number <Styled.Required>*</Styled.Required></b>
                            <p><Styled.Input type='text' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Cardholder's name <Styled.Required>*</Styled.Required></b>
                            <p><Styled.Input type='email' value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} /></p>
                        </div>
                    </Styled.InfoColumn>
                    <Styled.InfoColumn>
                        <div>
                            <b>Expires</b>
                            <p><Styled.Input type='text' value={cardExpires} onChange={(e) => setCardExpires(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Cvv</b>
                            <p><Styled.Input type='text' value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} /></p>
                        </div>
                    </Styled.InfoColumn>
                </Styled.Info>
                : null
            }

            <Styled.ButtonContainer>
                {isCreatingCard ?
                    <>
                        <Styled.Button onClick={handleSaveCard}>Save</Styled.Button>
                        <Styled.Button onClick={handleSaveCard}>Cancel</Styled.Button>
                    </>
                    :
                    <>
                        <Styled.Button onClick={handleAddCard}>Add</Styled.Button>
                        <Styled.Button>Remove</Styled.Button>
                    </>
                }
            </Styled.ButtonContainer>
        </Styled.Container>
    )
}

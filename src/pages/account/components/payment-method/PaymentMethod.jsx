import { useState } from 'react'
import * as PageStyles from '../../styles'
import * as Styled from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { registerNewCard, removeCard } from '../../../../redux/user/slice'
import { GoTrash } from "react-icons/go";
import CardInfo from './CardInfo'

export default function PaymentMethod() {
    const { currentUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

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
        if (currentUser.cards.length === 3) {
            alert(`You already have reached the limit for cards registered (3)`)
        } else {
            dispatch(registerNewCard({
                cardName: cardName,
                cardNumber: cardNumber,
                cardHolder: cardHolder,
                cardExpires: cardExpires,
                cardCvv: cardCvv
            }))
        }
        setIsCreatingCard(false)
    }

    return (
        <PageStyles.Container>
            <PageStyles.Title>Payment methods</PageStyles.Title>
            <p>Cards saved: {currentUser.cards.length}/3</p>
            {currentUser.cards.map(card => {
                return (
                    <CardInfo card={card} />
                )
            })}
            {isCreatingCard ?
                <PageStyles.Info>
                    <PageStyles.InfoColumn>
                        <div>
                            <b>Card name <PageStyles.Required>*</PageStyles.Required></b>
                            <p><PageStyles.Input type='text' value={cardName} onChange={(e) => setCardName(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Card number <PageStyles.Required>*</PageStyles.Required></b>
                            <p><PageStyles.Input type='text' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Cardholder's name <PageStyles.Required>*</PageStyles.Required></b>
                            <p><PageStyles.Input type='email' value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} /></p>
                        </div>
                    </PageStyles.InfoColumn>
                    <PageStyles.InfoColumn>
                        <div>
                            <b>Expires</b>
                            <p><PageStyles.Input type='text' value={cardExpires} onChange={(e) => setCardExpires(e.target.value)} /></p>
                        </div>
                        <div>
                            <b>Cvv</b>
                            <p><PageStyles.Input type='text' value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} /></p>
                        </div>
                    </PageStyles.InfoColumn>
                </PageStyles.Info>
                : null
            }

            <PageStyles.ButtonContainer>
                {isCreatingCard ?
                    <>
                        <PageStyles.Button onClick={handleSaveCard}>Save</PageStyles.Button>
                        <PageStyles.Button onClick={handleSaveCard}>Cancel</PageStyles.Button>
                    </>
                    :
                    <>
                        <PageStyles.Button onClick={handleAddCard}>Add</PageStyles.Button>
                        <PageStyles.Button>Remove</PageStyles.Button>
                    </>
                }
            </PageStyles.ButtonContainer>
        </PageStyles.Container>
    )
}

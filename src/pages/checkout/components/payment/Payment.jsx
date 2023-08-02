import { useState } from 'react'
import Input from '../../../../components/input/Input'
import * as PageStyles from '../../styles'
import * as Styled from './styles'

export default function Payment() {
    const [cardNumber, setCardNumber] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [expire, setExpire] = useState('')
    const [cvv, setCvv] = useState('')

    const handleExpire = (e) => {
        const input = e.target.value;

        // Remove any existing slashes to handle user input with slashes
        const cleanedDate = input.replace(/\D/g, '');

        if (cleanedDate.length <= 4) {
            // Format the date as "MM/YY" or "M/Y" if input is incomplete
            const formatted = cleanedDate
                .replace(/^(\d{1,2})/, '$1/')
                .replace(/^(\d{2})\/(\d{1,2})/, '$1/$2');

            setExpire(formatted);
        }
    }

    const handleCvv = (e) => {
        const input = e.target.value;

        const cleanCvv = input.replace(/\D/g, '');

        if (input.length <= 3) {
            setCvv(cleanCvv);
        }
    }

    const handleCardNumber = (e) => {
        const input = e.target.value;

        const cleanedCardNumber = input.replace(/\D/g, '');

        if (input.length <= 19) {

            const formatted = cleanedCardNumber
                .replace(/^(\d{4})/, '$1 ')
                .replace(/^(\d{4})\s(\d{4})/, '$1 $2 ')
                .replace(/^(\d{4})\s(\d{4})\s(\d{4})/, '$1 $2 $3 ');

            setCardNumber(formatted);
        }
    }

    return (
        <>
            <PageStyles.Title>Payment</PageStyles.Title>
            <PageStyles.Container>
                <div>
                    <PageStyles.Input>
                        <p>Card number</p>
                        <Styled.Input type='text' value={cardNumber} onChange={handleCardNumber} placeholder='0000 0000 0000 0000' />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend={`Cardholder's name`} value={cardHolder} setValue={setCardHolder} />
                    </PageStyles.Input>
                </div>
                <div>
                    <PageStyles.Input>
                        <p>Expire date</p>
                        <Styled.Input type='text' value={expire} onChange={handleExpire} placeholder='MM/YY' />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <p>Cvv</p>
                        <Styled.Input type='text' value={cvv} onChange={handleCvv} placeholder='000' />
                    </PageStyles.Input>
                </div>
                <div>
                    <Styled.Card>
                        <Styled.CardNumber>{cardNumber.length === 0 ? '0000 0000 0000 0000' : cardNumber}</Styled.CardNumber>
                        <Styled.CardHolder>{cardHolder.length === 0 ? `Cardholder's name` : cardHolder}</Styled.CardHolder>
                        <Styled.Expire>{expire.length === 0 ? '00/00' : expire}</Styled.Expire>
                    </Styled.Card>
                    <Styled.CardBack>
                        <Styled.BlackLine></Styled.BlackLine>
                        <Styled.Cvv>{cvv.length === 0 ? '000' : cvv}</Styled.Cvv>
                    </Styled.CardBack>
                </div>
            </PageStyles.Container>
        </>
    )
}

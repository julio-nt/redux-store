import * as PageStyles from '../../styles'
import * as Styled from './styles'

export default function Payment(props) {

    const handleExpire = (e) => {
        const input = e.target.value;

        // Remove any existing slashes to handle user input with slashes
        const cleanedDate = input.replace(/\D/g, '');

        if (cleanedDate.length <= 4) {
            // Format the date as "MM/YY" or "M/Y" if input is incomplete
            const formatted = cleanedDate
                .replace(/^(\d{1,2})/, '$1/')
                .replace(/^(\d{2})\/(\d{1,2})/, '$1/$2');

            props.setExpire(formatted);
        }
    }

    const handleCvv = (e) => {
        const input = e.target.value;

        const cleanCvv = input.replace(/\D/g, '');

        if (input.length <= 3) {
            props.setCvv(cleanCvv);
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

            props.setCardNumber(formatted);
        }
    }

    return (
        <>
            <PageStyles.Title>Payment</PageStyles.Title>
            <PageStyles.Container>
                <div>
                    <PageStyles.Input>
                        <p>Card number <PageStyles.Required>*</PageStyles.Required></p>
                        <Styled.Input type='text' value={props.cardNumber} onChange={handleCardNumber} placeholder='0000 0000 0000 0000' />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <p>Cardholder's name <PageStyles.Required>*</PageStyles.Required></p>
                        <Styled.Input type='text' value={props.cardHolder} setValue={props.setCardHolder} onChange={(e) => props.setCardHolder(e.target.value)} />
                    </PageStyles.Input>
                </div>
                <div>
                    <PageStyles.Input>
                        <p>Expire date  <PageStyles.Required>*</PageStyles.Required></p>
                        <Styled.Input type='text' value={props.expire} onChange={handleExpire} placeholder='MM/YY' />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <p>Cvv  <PageStyles.Required>*</PageStyles.Required></p>
                        <Styled.Input type='text' value={props.cvv} onChange={handleCvv} placeholder='000' />
                    </PageStyles.Input>
                </div>
                <Styled.Card>
                    <Styled.CardFront>
                        <Styled.CardNumber>{props.cardNumber.length === 0 ? '0000 0000 0000 0000' : props.cardNumber}</Styled.CardNumber>
                        <Styled.CardHolder>{props.cardHolder.length === 0 ? `Cardholder's name` : props.cardHolder}</Styled.CardHolder>
                        <Styled.Expire>{props.expire.length === 0 ? '00/00' : props.expire}</Styled.Expire>
                    </Styled.CardFront>
                    <Styled.CardBack>
                        <Styled.BlackLine></Styled.BlackLine>
                        <Styled.Cvv>{props.cvv.length === 0 ? '000' : props.cvv}</Styled.Cvv>
                    </Styled.CardBack>
                </Styled.Card>
            </PageStyles.Container>
        </>
    )
}

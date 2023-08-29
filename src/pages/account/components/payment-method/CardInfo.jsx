import { useDispatch } from 'react-redux';
import * as Styled from './styles'
import { GoTrash } from "react-icons/go";
import { removeCard } from '../../../../redux/user/slice';

export default function CardInfo({ card }) {
    const dispatch = useDispatch()
    const handleRemoveCard = () => {
        dispatch(removeCard(card.cardNumber))
    }
    return (
        <Styled.CardContainer key={card.cardName}>
            <p>{card.cardName}</p>
            <p>**** **** **** {card.cardNumber.slice(12, 16)}</p>
            <p>Expiration date: {card.cardExpires}</p>
            <br />
            <GoTrash onClick={handleRemoveCard} />
        </Styled.CardContainer>
    )
}

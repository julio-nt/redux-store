import * as Styled from './styles'

import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../redux/cart/slice'

export default function ProductItem({ beer }) {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addProduct(beer))
    }
    return (
        <Styled.Container>
            <Styled.Thumbnail src={beer.img} alt={beer.name} />
            <Styled.Add onClick={handleAddToCart}>Add <Styled.Span>to cart</Styled.Span></Styled.Add>
            <Styled.Name>{beer.name}</Styled.Name>
            <Styled.Description>{beer.description}</Styled.Description>
            <Styled.ValuesContainer>
                <Styled.ValueBox>
                    <Styled.Values>abv</Styled.Values>
                    <Styled.Values>{beer.abv}%</Styled.Values>
                </Styled.ValueBox>
                <Styled.ValueBox>
                    <Styled.Values>ibu</Styled.Values>
                    <Styled.Values>{beer.ibu}%</Styled.Values>
                </Styled.ValueBox>
            </Styled.ValuesContainer>
        </Styled.Container>
    )
}

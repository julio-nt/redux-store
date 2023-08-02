import * as Styled from './styles'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

import { useSelector } from 'react-redux'
import { selectProductsTotalPrice } from '../../../../redux/cart/cart.selectors'

export default function ProductsList() {
    const { products } = useSelector(state => state.cartReducer)

    const totalPrice = useSelector(selectProductsTotalPrice)

    return (
        <>
            <table style={{ width: '100%' }}>
                <Styled.HeadingRow>
                    <Styled.Image>&nbsp;</Styled.Image>
                    <Styled.Header>PRODUCT</Styled.Header>
                    <Styled.Header>UNIT VALUE</Styled.Header>
                    <Styled.Header>QUANTITY</Styled.Header>
                    <Styled.Header>TOTAL VALUE</Styled.Header>
                    <Styled.Trash>&nbsp;</Styled.Trash>
                </Styled.HeadingRow>
                {products.map(product => {
                    return (
                        <CheckoutItem product={product} key={product.name} />
                    )
                })}
            </table>
            <div>
                <Styled.Total>Total: ${totalPrice.toFixed(2)}</Styled.Total>
            </div>
        </>
    )
}

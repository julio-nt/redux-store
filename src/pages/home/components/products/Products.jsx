import * as Styled from './styles'
import { beers } from '../../../../data/products'
import ProductItem from '../product-item/ProductItem'

export default function Products() {
    return (
        <>
            <Styled.Title>Beers</Styled.Title>
            <Styled.BeerList>
                {beers.map((beer, i) => {
                    return (
                        <ProductItem beer={beer} key={i} />
                    )
                })}
            </Styled.BeerList>
        </>
    )
}

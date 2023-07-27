import { useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai';

// Styles
import * as Styled from "./styles";

// Components
import CartItem from './cart-item/CartItem'
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors';

const Cart = ({ isVisible, setIsVisible }) => {
    const handleEscapeAreaClick = () => setIsVisible(false);

    const { products } = useSelector(rootReducer => rootReducer.cartReducer)

    const totalPrice = useSelector(selectProductsTotalPrice)

    return (
        <Styled.CartContainer isVisible={isVisible}>
            <Styled.CartEscapeArea onClick={handleEscapeAreaClick} />
            <Styled.CartContent>
                <Styled.CloseButton
                    onClick={handleEscapeAreaClick}
                    aria-label={`Close cart`}>
                    <AiOutlineClose />
                </Styled.CloseButton>
                <Styled.CartTitle>Seu Carrinho</Styled.CartTitle>
                {products.map((product, i) => {
                    return <CartItem product={product} key={i} />
                })}
                {products.length > 0 ?
                    <>
                        <Styled.CartTotal>Total: R${totalPrice.toFixed(2)}</Styled.CartTotal>
                        <Styled.Button><Styled.Links to='/checkout'>Proceed to checkout</Styled.Links></Styled.Button>
                    </>
                    : null
                }
            </Styled.CartContent>
        </Styled.CartContainer>
    );
};

export default Cart;
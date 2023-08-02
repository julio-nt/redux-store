import { useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai';

// Styles
import * as Styled from "./styles";

// Components
import CartItem from './cart-item/CartItem'
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors';

const Cart = ({ isVisible, setIsVisible }) => {
    const handleEscapeAreaClick = () => setIsVisible(false);

    const { products } = useSelector(state => state.cartReducer)
    const { currentUser } = useSelector(state => state.userReducer)

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
                <Styled.CartTitle>Your cart</Styled.CartTitle>
                {products.map((product, i) => {
                    return <CartItem product={product} key={i} />
                })}
                {products.length > 0 ?
                    <>
                        <Styled.CartTotal>Total: R${totalPrice.toFixed(2)}</Styled.CartTotal>
                        <Styled.Links to={currentUser !== null ? '/checkout' : '/login'}><Styled.Button>Proceed to checkout</Styled.Button></Styled.Links>
                    </>
                    : null
                }
            </Styled.CartContent>
        </Styled.CartContainer>
    );
};

export default Cart;
import { useSelector } from 'react-redux'

// Styles
import * as Styles from "./styles";

// Components
import CartItem from './cart-item/CartItem'
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors';

const Cart = ({ isVisible, setIsVisible }) => {
    const handleEscapeAreaClick = () => setIsVisible(false);

    const { products } = useSelector(rootReducer => rootReducer.cartReducer)

    const totalPrice = useSelector(selectProductsTotalPrice)

    return (
        <Styles.CartContainer isVisible={isVisible}>
            <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
            <Styles.CartContent>
                <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
                {products.map((product, i) => {
                    return <CartItem product={product} key={i} />
                })}
                <Styles.CartTotal>Total: R${totalPrice.toFixed(2)}</Styles.CartTotal>
            </Styles.CartContent>
        </Styles.CartContainer>
    );
};

export default Cart;
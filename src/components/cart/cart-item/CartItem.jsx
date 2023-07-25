import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux'

// Styles
import * as Styles from "./styles";
import { removeProduct, increaseProduct, descreaseProduct } from "../../../redux/cart/slice";

const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemoveClick = () => {
        dispatch(removeProduct(product.id))
    };

    const handleIncreaseClick = () => {
        dispatch(increaseProduct(product.id))
    };

    const handleDecreaseClick = () => {
        dispatch(descreaseProduct(product.id))
    };

    return (
        <Styles.CartItemContainer>
            <Styles.CartItemImage imageUrl={product.imageUrl} />

            <Styles.CartItemInfo>
                <p>{product.name}</p>
                <p>R${product.price.toFixed(2)}</p>

                <Styles.CartItemQuantity>
                    <AiOutlineMinus
                        size={20}
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={handleDecreaseClick}
                    />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus
                        size={20}
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={handleIncreaseClick}
                    />
                </Styles.CartItemQuantity>
            </Styles.CartItemInfo>

            <Styles.RemoveButton
                onClick={handleRemoveClick}
                aria-label={`Remove ${product.name}`}
            >
                <AiOutlineClose size={25} />
            </Styles.RemoveButton>
        </Styles.CartItemContainer>
    );
};

export default CartItem;
import { useDispatch } from 'react-redux'


// Styles
import * as Styled from "./styles";
import { removeProduct, increaseProduct, descreaseProduct } from "../../../../redux/cart/slice";

const CheckoutItem = ({ product }) => {
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

    const productTotal = product.price * product.quantity

    return (
        <Styled.InfoRow>
            <Styled.ImageContainer>
                <Styled.Image src={product.img} />
            </Styled.ImageContainer>
            <Styled.Data>{product.name}</Styled.Data>
            <Styled.Data>{product.price.toFixed(2)}</Styled.Data>
            <Styled.Data>
                <Styled.Quantity>
                    <Styled.MinusButton size={20} aria-label={`Decrease quantity of ${product.name}`}
                        onClick={handleDecreaseClick} />
                    {product.quantity}
                    <Styled.PlusButton size={20} aria-label={`Decrease quantity of ${product.name}`}
                        onClick={handleIncreaseClick} />
                </Styled.Quantity>
            </Styled.Data>
            <Styled.Data>{productTotal.toFixed(2)}</Styled.Data>
            <Styled.Trash>
                <Styled.TrashButton size={20} aria-label={`Remove ${product.name}`} onClick={handleRemoveClick} />
            </Styled.Trash>
        </Styled.InfoRow>
    );
};

export default CheckoutItem
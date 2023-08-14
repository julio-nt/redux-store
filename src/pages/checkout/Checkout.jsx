import { useState } from 'react'
import Header from '../../components/header/Header'
import Payment from './components/payment/Payment'
import ProductsList from './components/products-list/ProductsList'
import Shipment from './components/shipment/Shipment'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styles'

import { addOrder } from '../../redux/user/slice'
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors'

export default function Checkout() {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.cartReducer)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')

    const [cardNumber, setCardNumber] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [expire, setExpire] = useState('')
    const [cvv, setCvv] = useState('')

    const totalPrice = useSelector(selectProductsTotalPrice)


    const handleSubmit = () => {
        if (name === '') {
            alert(`Name can't be empty`)
        }
        else if (email === '') {
            alert(`Email can't be empty`)
        }
        else if (id === '') {
            alert(`ID can't be empty`)
        }
        else if (phone === '') {
            alert(`Phone can't be empty`)
        }
        else if (country === '') {
            alert(`Country can't be empty`)
        }
        else if (state === '') {
            alert(`State can't be empty`)
        }
        else if (city === '') {
            alert(`City can't be empty`)
        }
        else if (address === '') {
            alert(`Address can't be empty`)
        }
        else if (cardNumber === '') {
            alert(`Card number can't be empty`)
        }
        else if (cardHolder === '') {
            alert(`Cardholders's name can't be empty`)
        }
        else if (expire === '') {
            alert(`Expire can't be empty`)
        }
        else if (cvv === '') {
            alert(`CVV can't be empty`)
        } else {
            dispatch(addOrder({
                products: {
                    products,
                    total: totalPrice.toFixed(2)
                },
                shipment: {
                    name: name,
                    id: id,
                    phone: phone,
                    country: country,
                    state: state,
                    city: city,
                    address: address,
                    extraAddress: extraAddress
                },
                payment: {
                    cardNumber: cardNumber,
                    cardHolder: cardHolder,
                    expire: expire,
                    cvv: cvv,
                }
            }))
        }
    }

    return (
        <>
            <Header />
            <ProductsList />
            <Shipment
                name={name} setName={setName}
                email={email} setEmail={setEmail}
                id={id} setId={setId}
                phone={phone} setPhone={setPhone}
                country={country} setCountry={setCountry}
                state={state} setState={setState}
                city={city} setCity={setCity}
                address={address} setAddress={setAddress}
                extraAddress={extraAddress} setExtraAddress={setExtraAddress}
            />
            <Payment
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                cardHolder={cardHolder}
                setCardHolder={setCardHolder}
                expire={expire}
                setExpire={setExpire}
                cvv={cvv}
                setCvv={setCvv}
            />
            <Styled.Button onClick={handleSubmit}>Confirm purchase</Styled.Button>
        </>
    )
}

import { useState } from 'react'
import Header from '../../components/header/Header'
import Payment from './components/payment/Payment'
import ProductsList from './components/products-list/ProductsList'
import Shipment from './components/shipment/Shipment'

export default function Checkout() {

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
        </>
    )
}

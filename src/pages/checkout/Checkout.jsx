import Header from '../../components/header/Header'
import Payment from './components/payment/Payment'
import ProductsList from './components/products-list/ProductsList'
import Shipment from './components/shipment/Shipment'

export default function Checkout() {
    return (
        <>
            <Header />
            <ProductsList />
            <Shipment />
            <Payment />
        </>
    )
}

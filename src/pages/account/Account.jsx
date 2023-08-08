import Header from '../../components/header/Header'
import PaymentMethod from './components/payment-method/PaymentMethod'
import AccountInfo from './components/accountInfo/AccountInfo'

export default function Account() {


    return (
        <>
            <Header />
            <AccountInfo />
            <PaymentMethod />
            {/* order history */}
        </>
    )
}

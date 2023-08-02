import { useEffect } from 'react'
import Header from '../../components/header/Header'
import Products from './components/products/Products'
import { useSelector } from 'react-redux'

export default function Home() {

    const { newUsers, currentUser } = useSelector(state => state.userReducer)

    useEffect(() => {
        console.log('User List ', newUsers)
        console.log('User ', currentUser)
    })

    return (
        <>
            <Header />
            <Products />
        </>
    )
}

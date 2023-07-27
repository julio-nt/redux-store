import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Account from "../pages/account/Account";
import Checkout from "../pages/checkout/Checkout";

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/myaccount',
        element: <Account />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
])

export default browserRouter
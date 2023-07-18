import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

export default browserRouter
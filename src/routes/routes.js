import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../components/login";
import Signup from "../components/registration";
import Products from "../components/products";
import Home from "../components/home";
import ShoppingCart from "../components/shopingcart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: <ShoppingCart />
            }

        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Signup />
    }
]);

export default router;
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
import ProductDetails from "../components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/products/:productID",
        element: <ProductDetails/>
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import Order from "../components/OrderPage/Order/Order";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Secret from "../components/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../components/Dashboard/MyCart/Mycart";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'secret',
                element: <PrivetRoute><Secret></Secret></PrivetRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {
                path: 'mycart',
                element: <Mycart></Mycart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])

export default router
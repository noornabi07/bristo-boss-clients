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
import AddItem from "../components/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../components/Dashboard/ManageItem/ManageItem";
import Payment from "../components/Dashboard/Payment/Payment";
import UserHome from "../components/Dashboard/UserHome/UserHome";
import AdminHome from "../components/Dashboard/AdminHome/AdminHome";

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

    // dashboard different path set here
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'mycart',
                element: <Mycart></Mycart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },

            
            // admin routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            }
            
        ]
    }
])

export default router
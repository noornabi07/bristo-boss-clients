import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBookmark, FaCalendar, FaForumbee, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useAdmin from '../hook/useAdmin';
import UseCart from '../hook/UseCart';


const Dashboard = () => {
   const [cart] = UseCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;

    const [isAdmin] = useAdmin()


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col text-center mt-3">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItem"><FaBars></FaBars> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaBookmark></FaBookmark> Manage Booking
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users
                                    
                                </NavLink>

                            </li>
                        </> : <>
                            <li>
                                <NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart>
                                </FaShoppingCart> My Cart
                                    <div className="badge badge-secondary">+{cart.length || 0}</div>
                                </NavLink>

                            </li>
                        </>
                    }



                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li><NavLink to="/menu"><FaBars></FaBars> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaForumbee></FaForumbee> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../SectionTitle/SectionTitle';
import UseCart from '../../../hook/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Mycart = () => {
    const [cart, refetch] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
               
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    return (
        <div className='w-full ml-5'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase text-2xl font-semibold flex justify-between mb-5'>
                <h3>Total Cart Item: {cart.length}</h3>
                <h3>Total Prices: ${total}</h3>
                <button className="btn btn-sm btn-outline btn-warning">Pay</button>
            </div>

            {/* table show here */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td >${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mycart;
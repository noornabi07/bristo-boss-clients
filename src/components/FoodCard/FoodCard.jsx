import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hook/UseCart';

const FoodCard = ({menu}) => {
    const {name, price, recipe, image, _id} = menu;
    const {user} = useContext(AuthContext);
    const [, refetch] = UseCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = menu =>{
        // console.log(item)
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, price, image, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login for oder food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login", {state: {from: location}});
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 font-semibold text-white absolute right-5 p-2 top-5'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(menu)} className="btn btn-outline bg-gray-200 text-orange-500 border-0 border-b-4 border-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
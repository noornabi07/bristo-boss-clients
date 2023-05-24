import React from 'react';

const FoodCard = ({menu}) => {
    const {name, price, recipe, image} = menu;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 font-semibold text-white absolute right-5 p-2 top-5'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-gray-200 text-orange-500 border-0 border-b-4 border-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
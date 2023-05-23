import React from 'react';

const MenuItem = ({menu}) => {
    const {name, price, recipe, image} = menu;
    return (
        <div className='flex gap-2 items-center'>
            <img style={{borderRadius: "0px 200px 200px 200px"}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-semibold'>${price}</p>
        </div>
    );
};

export default MenuItem;
import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-20'>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-8 mt-10'>
                {
                    items.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>

            <div className='text-center mt-4'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline bg-gray-200 text-orange-500 border-0 border-b-4 border-orange-500">Order Your Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
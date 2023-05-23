import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../hook/useMenu';

const PopularMenu = () => {
    const [menus] = useMenu();
    const popular = menus.filter(menu => menu.category === 'popular')

    return (
        <div>
            <SectionTitle
                subheading="Check it Out"
                heading="From Popular menu"
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8'>
                {
                    popular.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>

            <div className='text-center mt-8'>
                <button className="btn btn-outline mt-4 border-0 border-b-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;
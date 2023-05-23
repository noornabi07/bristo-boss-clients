import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenus(popularItems)
        })
    }, [])


    return (
        <div>
            <SectionTitle
                subheading="Check it Out"
                heading="From our menu"
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8'>
                {
                    menus.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;
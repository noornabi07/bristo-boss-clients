import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Cover/Cover';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='my-20'>
            { title &&  <Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-8 mt-10'>
                {
                    items.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
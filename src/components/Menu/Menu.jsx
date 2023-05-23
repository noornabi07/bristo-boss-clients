import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import menuCover from '../../assets/menu/banner3.jpg'
import useMenu from '../../hook/useMenu';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

import desserImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menus] = useMenu();
    const desserts = menus.filter(menu => menu.category === 'dessert')
    const pizza = menus.filter(menu => menu.category === 'pizza')
    const soup = menus.filter(menu => menu.category === 'soup')
    const salad = menus.filter(menu => menu.category === 'salad')
    const offered = menus.filter(menu => menu.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subheading="Don't miss" heading="today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={desserts} coverImg={desserImg} title="Desserts"></MenuCategory>

            {/* pizza */}
            <MenuCategory
                items={pizza} coverImg={pizzaImg} title="pizza"
            ></MenuCategory>

            {/* salad */}
            <MenuCategory items={salad} coverImg={saladImg} title="Salad"></MenuCategory>

            {/* soup */}
            <MenuCategory items={soup} coverImg={soupImg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;
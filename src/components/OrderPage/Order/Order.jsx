import React, { useState } from 'react';
import orderImg from '../../../assets/shop/order.jpg'
import Cover from '../../Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hook/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();
  
    const desserts = menus.filter(menu => menu.category === 'dessert')
    const pizza = menus.filter(menu => menu.category === 'pizza')
    const soup = menus.filter(menu => menu.category === 'soup')
    const salad = menus.filter(menu => menu.category === 'salad')
    const drinks = menus.filter(menu => menu.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={orderImg} title="Order Food"></Cover>

            <Tabs className="mt-20" defaultIndex={tabIndex} onSelect={(index) => 
                setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
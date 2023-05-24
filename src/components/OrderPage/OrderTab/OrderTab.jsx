import React from 'react';
import FoodCard from '../../FoodCard/FoodCard';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    }

    return (

        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10 mt-10'>
                        {
                            items.map(menu => <FoodCard
                                key={menu._id}
                                menu={menu}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default OrderTab;
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import feature from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='mt-20 featured-item bg-fixed  text-white py-16'>
            <SectionTitle 
            subheading="Check it Out"
                heading="Our featured item"
            ></SectionTitle>

            <div className='md:flex justify-center bg-slate-500 bg-opacity-50 pt-10 items-center pb-10 gap-10 px-32'>
                <div>
                    <img src={feature} alt="" />
                </div>
                <div>
                    <p>March 25, 2030</p>
                    <p className='uppercase my-3'>where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur quam nam, vel obcaecati voluptatum sunt at corrupti nesciunt modi sed! Nostrum nam modi quod fugit animi laboriosam assumenda, et ut veritatis illum id voluptate incidunt exercitationem a excepturi sequi.</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-4 border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import img1 from '../../assets/home/slide5.jpg'
import img2 from '../../assets/home/slide3.jpg'
import img3 from '../../assets/home/slide2.jpg'

const Recommend = () => {
    return (
        <div>
            <SectionTitle
                subheading="Should Try"
                heading="chef recommends"
            ></SectionTitle>


          {/* item group */}

            <div className='grid md:grid-cols-3 gap-5 my-20'>
                <div className="card card-compact w-96 bg-base-100 shadow-lg">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="font-bold card-title">Caeser Salad</h2>
                        <p className='font-semibold'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-outline bg-gray-200 text-orange-500 mt-4 border-0 border-b-4 border-orange-500">View Full Menu</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Caeser soup</h2>
                        <p className='font-semibold'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-outline bg-gray-200 text-orange-500 mt-4 border-0 border-b-4 border-orange-500">View Full Menu</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Caeser pizza</h2>
                        <p className='font-semibold'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-outline bg-gray-200 text-orange-500 mt-4 border-0 border-b-4 border-orange-500">View Full Menu</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recommend;
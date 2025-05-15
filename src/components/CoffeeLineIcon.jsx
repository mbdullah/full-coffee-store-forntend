import React from 'react';
import image1 from '../assets/images/icons/1.png'
import image2 from '../assets/images/icons/2.png'
import image3 from '../assets/images/icons/3.png'
import image4 from '../assets/images/icons/4.png'


const CoffeeLineIcon = () => {
    return (
       <div className='bg-[#ECEAE3]'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[56px] px-5 max-w-8/12 mx-auto gap-10'>
            <div>
                <img src={image1} alt="icon 1" />
                <h3 className='text-4xl text-[#331A15] specific-font my-3'>Awesome Aroma</h3>
                <p className='text-[#1B1A1A] text-[16px]'>
                    You will definitely be a fan of the design & aroma of your coffee
                </p>
            </div>
            <div>
                <img src={image2} alt="icon 2" />
                <h3 className='text-4xl text-[#331A15] specific-font my-3'>High Quality</h3>
                <p className='text-[#1B1A1A] text-[16px]'>
                   We served the coffee to you maintaining the best quality
                </p>
            </div>
            <div>
                <img src={image3} alt="icon 3" />
                <h3 className='text-4xl text-[#331A15] specific-font my-3'>Pure Grades</h3>
                <p className='text-[#1B1A1A] text-[16px]'>
                    The coffee is made of the green coffee beans which you will love
                </p>
            </div>
            <div>
                <img src={image4} alt="icon 4" />
                <h3 className='text-4xl text-[#331A15] specific-font my-3'>Proper Roasting</h3>
                <p className='text-[#1B1A1A] text-[16px]'>
                    Your coffee is brewed by first roasting the green coffee beans
                </p>
            </div>
            
        </div>
       </div>
    );
};

export default CoffeeLineIcon;
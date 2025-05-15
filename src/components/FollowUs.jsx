import React from 'react';
import coffee1 from '../assets/images/cups/Rectangle 9.png'
import coffee2 from '../assets/images/cups/Rectangle 10.png'
import coffee3 from '../assets/images/cups/Rectangle 11.png'
import coffee4 from '../assets/images/cups/Rectangle 12.png'
import coffee5 from '../assets/images/cups/Rectangle 13.png'
import coffee6 from '../assets/images/cups/Rectangle 14.png'
import coffee7 from '../assets/images/cups/Rectangle 15.png'
import coffee8 from '../assets/images/cups/Rectangle 16.png'

const FollowUs = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <p className='text-xl text-[#1B1A1A] text-center'>Follow Us Now</p>
            <h3 className='text-center text-[55px] specific-font text-[#331A15]'>Follow on Instagram</h3>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <img src={coffee1} alt="coffee cup" />
                <img src={coffee2} alt="coffee cup" />
                <img src={coffee3} alt="coffee cup" />
                <img src={coffee4} alt="coffee cup" />
                <img src={coffee5} alt="coffee cup" />
                <img src={coffee6} alt="coffee cup" />
                <img src={coffee7} alt="coffee cup" />
                <img src={coffee8} alt="coffee cup" />
            </div>
        </div>
    );
};

export default FollowUs;
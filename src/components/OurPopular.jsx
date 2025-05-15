import React from 'react';
import { Link } from 'react-router';

const OurPopular = () => {
    return (
        <div
        className='my-[120px] min-h-screen'
        style={{
        backgroundImage:
          "url(https://i.ibb.co/xSzzSBTK/1.png)",
      }}
        >
            <div className='w-8/12 mx-auto'>
              <p className='text-xl text-[#1B1A1A] text-center'>--- Sip & Savor ---</p>
              <h3 className='text-[#331A15] text-[55px] specific-font text-center'>Our Popular Products</h3>
              <Link to="/addCoffee">
              <p className='text-center mt-2'>
              <button className='text-2xl cursor-pointer text-white specific-font py-2 px-5 rounded bg-[#E3B577] border-2 border-[#331A15]'>
                Add Coffee
              </button>
              </p>
              </Link>
            </div>
        </div>
    );
};

export default OurPopular;
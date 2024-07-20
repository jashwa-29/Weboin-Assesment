import React from 'react';
import logo from '../assets/FoodieLogo.png';

const Navbar = () => {
  return (
    <section className=' py-3 sticky top-0 z-50 bg-white/60 backdrop-blur-md'>
      <div className='w-[95%] mx-auto flex items-center justify-between'>
        <img src={logo} alt="Foodie logo" className='w-[85px]' />
        <button className='bg-rose-500 px-[28px] py-[11px] rounded-[50px] text-white font-medium text-[15px]'>
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}

export default Navbar;

import React from 'react';
import logo from '../assets/FoodieLogo.png';
import iphone from '../assets/iphone13-Layout.png';
import reelv from '../assets/hero-reel.mp4';

const Hero = () => {
  return (
    <section className='relative w-full lg:h-[91vh] h-auto'>
      <div className='absolute inset-0 bg-hero-bg-img bg-no-repeat bg-center bg-cover opacity-35'></div>
      <div className='absolute inset-0 md:bg-hero-svg-bg bg-hero-svg-bg-2  bg-no-repeat bg-center bg-cover opacity-85'></div>
      <div className='relative w-[95%] mx-auto flex items-center justify-center flex-wrap gap-20 py-8'>
        <div className='relative lg:w-[308px] h-auto py-5 md:w-[280px] w-full'>
          <video
            src={reelv} // Replace with your video path or URL
            className='absolute top-8 left-1 w-[95%] h-[90%] object-cover rounded-[30px]'
            autoPlay
            muted
            loop
          />
          <img src={iphone} alt="iPhone layout" className='relative w-full h-full' />
        </div>

        <div className='flex md:items-start items-center flex-col lg:w-[500px] md:w-full w-[90%]'>
          <img src={logo} alt="Foodie logo" className='w-[110px]' />
          <h1 className='font-bold text-white text-[48px] pt-3 leading-tight lg:text-right text-center'>
            Welcome to Foodie
          </h1>
          <p className='text-[20px] text-white font-medium text-center pb-3 lg:py-0 py-4 leading-snug'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis temporibus dolore minus eaque illum, ratione commodi dignissimos aspernatur praesentium voluptate exercitationem quod, quos voluptates repellendus labore numquam debitis laudantium?
          </p>
          <button className='bg-none rounded-full w-[200px] py-[8px]  border-white border-[3px] my-7'  >

<span className='bg-white rounded-full px-[36px] py-3 text-[16px] text-black font-bold relative right-[7px] bottom-[6px]'> Join the Waitlist</span>

</button>

  
        </div>
      </div>
    </section>
  );
}

export default Hero;

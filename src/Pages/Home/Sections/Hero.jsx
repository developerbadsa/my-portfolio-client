import React from 'react';
import Button from '../../../Components/Button/ButtonLg';

const Hero = () => {
      return (
            <div className="hero min-h-screen ">
                  <div className="hero-content flex-col lg:flex-row">
                        <div className='px-10 my-6'>
                              <h1 className="text-5xl font-bold">Welcome To me Portfolio</h1>
                              <p className="py-6 flex flex-wrap">
                              Hi there! I'm <span className='text-orange-600'>Rahim Badsa</span>, a passionate React web developer with a focus on the MERN stack. I turn ideas into interactive and user-friendly applications.


                              </p>
                              <Button text={'Let’s begin'}></Button>
                        </div>
                        <img src="/src/assets/images/pngegg-removebg-preview.png" className="max-w-md " />
                  </div>
            </div>
      );
};

export default Hero;
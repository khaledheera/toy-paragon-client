import React from 'react';
import gallery from '../../../assets/images/Gallery1.jpg'
import gallery2 from '../../../assets/images/Gallery2.jpg'
import gallery3 from '../../../assets/images/Gallery3.jpg'
import gallery4 from '../../../assets/images/Gallery4.jpg'
import gallery5 from '../../../assets/images/Gallery5.jpg'
import gallery6 from '../../../assets/images/Gallery6.jpg'
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <h2></h2>

            <div className="bg-[#00685E]  glass  shadow-lg   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-black">
      <div className="flex flex-col w-full mb-6 lg:justify-center lg:flex-row md:mb-8">
        
          <h2 className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl text-center flex justify-center">
            Trending Now 
            
          </h2>
        
      </div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={gallery}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Leisha
          </p>
         
        </div>
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={gallery2}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Bella Izza
          </p>
          
        </div>
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={gallery3}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Danka
          </p>
          
        </div>
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={gallery4}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Rendering of Yeti
          </p>
          
        </div>
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={gallery5}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Macy
          </p>
          
        </div>
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={gallery6}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Annie-Panny
          </p>
          
        </div>
      </div>
      <div className="text-center">
        <Link
          to='/hjhjdjkf'
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
        </div>
    );
};

export default Gallery;
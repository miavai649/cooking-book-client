import { Carousel } from "flowbite-react";
import React from "react";
import img1 from '../../../assets/food-img/chicken-skewers-with-slices-sweet-peppers-dill.jpg';
import img2 from '../../../assets/food-img/front-view-burger-stand.jpg';
import img3 from '../../../assets/food-img/grilled-meat-skewers-chicken-shish-kebab-with-zucchini-tomatoes-red-onions.jpg';

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div style={{ backgroundImage: `url(${img1})` }} className="flex h-full items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            {/* <img className="opacity-60" src={img1} alt="" /> */}
            <div >
            <h1 className="ml-16 text-5xl text-white font-bold">Welcome to Cooking Book</h1>
            </div>
          </div>
          <div  style={{ backgroundImage: `url(${img2})` }} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            {/* <img className="opacity-60" src={img2} alt="" /> */}
            <div>
            <h1 className="ml-16 text-5xl text-white font-bold">Welcome to Cooking Book</h1>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${img3})` }} className="flex h-full items-center justify-end bg-gray-400 dark:bg-gray-700 dark:text-white">
            {/* <img className="opacity-60" src={img3} alt="" /> */}
            <div >
            <h1 className="mr-16 text-5xl text-white font-bold">Welcome to Cooking Book</h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

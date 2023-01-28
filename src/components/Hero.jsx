import React from 'react';
import Shoes from '../assets/shoes.png';
import logShoes from '../assets/logshoes.png';

const Hero = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="left-side">
                <div className="relative mt-8">
                    <h1 className="text-7xl font-bold w-[70%] text-white">All the Sneakers you want is here.</h1>
                    <div className="w-40 h-12 flex items-center justify-center overflow-hidden absolute bottom-1 left-[35%] py-2 px-4 rounded-full bg-[#555] shadow-lg shadow-black">
                        <img src={logShoes} alt="" className="w-10 absolute" />
                    </div>
                </div>
                <p className="mt-4 w-[70%] text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores similique, facere ab repellendus dolorum delectus ex maxime,
                    veniam labore temporibus atque voluptatem perferendis soluta sequi necessitatibus iste, sed dignissimos!s
                </p>
            </div>

            <div className="right-side relative">
                <div className="bg-[#333] absolute overflow-hidden right-0 w-[70%] -top-24 -z-10 h-screen after:content-['NIKE'] after:absolute after:-right-[40%] after:rotate-90 after:top-[25%] after:font-bold after:text-[200px] after:-z-10 after:text-[#555] after:tracking-wide">
                    <img
                        src={Shoes}
                        alt=""
                        className="w-[55%] absolute left-[50%] -translate-x-[50%] bottom-[50%] translate-y-[50%] drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

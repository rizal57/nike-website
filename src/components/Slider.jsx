import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { getSlider } from '../data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ShoppingBag, Star } from 'tabler-icons-react';

const Slider = () => {
    return (
        <div className="slide-container py-8">
            <Swiper
                className="w-[80%]"
                modules={[Pagination, Navigation]}
                navigation={true}
                slidesPerView={4}
                spaceBetween={30}
                loopFillGroupWithBlank={true}
                slidesPerGroup={1}
                loop={true}>
                {getSlider ? (
                    getSlider.map((slide) => {
                        return (
                            <SwiperSlide>
                                <div>
                                    <div className="bg-slate-200 rounded-xl flex flex-col items-center p-4">
                                        <img src={slide.img} alt="Product" className="w-[60%]" />
                                        <h1 className="mt-8 text-slate-800 font-semibold">{slide.name}</h1>
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-slate-200 font-bold text-xl my-3">${slide.price}</h1>
                                            <div className="flex items-center">
                                                <Star className="w-4 fill-yellow-500 stroke-yellow-500" />
                                                <Star className="w-4 fill-yellow-500 stroke-yellow-500" />
                                                <Star className="w-4 fill-yellow-500 stroke-yellow-500" />
                                                <Star className="w-4 fill-yellow-500 stroke-yellow-500" />
                                                <Star className="w-4 fill-yellow-500 stroke-yellow-500" />
                                            </div>
                                        </div>
                                        <button className="w-full py-2 px-4 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 text-slate-200 text-base font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap">
                                            Add To Cart <ShoppingBag />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <div>No Data</div>
                )}
            </Swiper>
        </div>
    );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



export default function Slider() {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation
                className="h-screen"
            >
                <SwiperSlide>
                    <div className="h-[100vh] bg-[url('/public/assets/Sliders/Slider.jpg')] flex lg:pl-80">
                        <div className="flex flex-col justify-center items-center p-10 gap-10 lg:items-start">
                            <h6 className="text-white text-xl lg:text-2xl font-bold">SUMMER 2025</h6>
                            <h1 className="text-white text-4xl font-bold w-70 text-center lg:text-left lg:text-7xl lg:w-200">NEW COLLECTION</h1>
                            <p className="text-white mt-2 max-w-md text-center text-2xl lg:text-left lg:font-medium lg: text-2xl">
                                We know hot large objects will act, but things on a small scale
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold w-60 h-20 rounded-xl text-2xl">
                                SHOP NOW
                            </button>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[100vh] bg-[url('/public/assets/Sliders/Slider.jpg')] flex lg:pl-80">
                        <div className="flex flex-col justify-center items-center p-10 gap-10 lg:items-start">
                            <h6 className="text-white text-xl lg:text-2xl font-bold">SUMMER 2025</h6>
                            <h1 className="text-white text-4xl font-bold w-70 text-center lg:text-left lg:text-7xl lg:w-200">NEW COLLECTION</h1>
                            <p className="text-white mt-2 max-w-md text-center text-2xl lg:text-left lg:font-medium lg: text-2xl">
                                We know hot large objects will act, but things on a small scale
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold w-60 h-20 rounded-xl text-2xl">
                                SHOP NOW
                            </button>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: white;
                    width: 3rem;
                    height: 3rem;
                }
            `}</style>
        </div>
    );
}

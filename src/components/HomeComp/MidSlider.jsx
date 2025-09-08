import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function MidSlider() {
    return (
        <>
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    className="h-[138vh] lg:h-[100vh]"
                >
                    <SwiperSlide>
                        <div className="bg-[#23856d] h-auto flex flex-col justify-end gap-[3rem] pt-[13.25rem] lg:flex-row lg:justify-center lg:pt-0 lg:items-center lg:h-[100vh]">
                            <div className="flex flex-col items-center text-white gap-[2rem] lg:pl-[10rem] lg:items-start lg:gap-[3rem]">
                                <h6 className="text-xl lg:text-3xl lg:font-medium">SUMMER 2025</h6>
                                <h1 className="text-4xl font-bold w-[15rem] text-center lg:text-left lg:text-9xl lg:w-[50rem] lg:leading-[9rem]">Vita Classic Product</h1>
                                <p className="mt-2 w-[15rem] text-center text-xl lg:text-left lg:w-[30rem] lg:text-2xl">We know hot large objects will act, but things on a small scale</p>
                                <div className="flex flex-col items-center lg:flex-row lg:gap-[3rem]">
                                    <p className="text-3xl font-bold">$16.48</p>
                                    <button className="mt-4 bg-green-500 text-white font-semibold w-60 h-20 rounded-xl text-2xl lg:mt-0">ADD TO CART</button>
                                </div>
                            </div>
                            <img src="/assets/Sliders/Slider2.png" alt="" className="lg:h-[100vh]" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[#23856d] h-auto flex flex-col justify-end gap-[3rem] pt-[13.25rem] lg:flex-row lg:justify-center lg:pt-0 lg:items-center lg:h-[100vh]">
                            <div className="flex flex-col items-center text-white gap-[2rem] lg:pl-[10rem] lg:items-start lg:gap-[3rem]">
                                <h6 className="text-xl lg:text-3xl lg:font-medium">SUMMER 2025</h6>
                                <h1 className="text-4xl font-bold w-[15rem] text-center lg:text-left lg:text-9xl lg:w-[50rem] lg:leading-[9rem]">Vita Classic Product</h1>
                                <p className="mt-2 w-[15rem] text-center text-xl lg:text-left lg:w-[30rem] lg:text-2xl">We know hot large objects will act, but things on a small scale</p>
                                <div className="flex flex-col items-center lg:flex-row lg:gap-[3rem]">
                                    <p className="text-3xl font-bold">$16.48</p>
                                    <button className="mt-4 bg-green-500 text-white font-semibold w-60 h-20 rounded-xl text-2xl lg:mt-0">ADD TO CART</button>
                                </div>
                            </div>
                            <img src="/assets/Sliders/Slider2.png" alt="" className="lg:h-[100vh]" />
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
        </>
    )
}
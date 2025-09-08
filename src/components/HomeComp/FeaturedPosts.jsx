import { AlarmClock, ChartArea, ChevronRight } from "lucide-react"

export default function FeaturedPosts() {

    const posts = ["/assets/Posts/Post1.jpg", "/assets/Posts/Post2.jpg", "/assets/Posts/Post3.jpg", "/assets/Posts/Post4.jpg", "/assets/Posts/Post5.jpg", "/assets/Posts/Post6.jpg"]

    return (
        <>
            <div className="flex flex-col items-center gap-[1.5rem] pb-[5rem]">
                <p className="text-[#23a6f0] text-xl font-semibold">Practice Advice</p>
                <h1 className="text-[#252b42] text-6xl font-bold w-[15rem] text-center lg:w-[40rem]">Featured Posts</h1>
                <p className="text-[#737373] text-xl text-center font-medium w-[20rem] mb-[4rem] lg:w-[40rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                <div className="flex flex-col gap-[2rem] lg:flex-row">
                    {
                        posts.map((elm, index) => {
                            return <div key={index} className={`${index < 3 ? "hidden lg:block" : "lg:hidden"} flex flex-col shadow-xl w-[20rem] lg:w-[25rem]`}>
                                <div className="relative w-[20rem] h-[20rem] flex lg:w-[25rem]">
                                    <img src={elm} alt="" className="object-cover w-full h-full" />
                                    <p className="absolute text-white font-semibold bg-[#e74040] px-4 py-1 rounded-sm mt-[1.5rem] ml-[1.5rem]">NEW</p>
                                </div>
                                <div className="flex flex-col items-start px-[1rem] gap-[2rem]">
                                    <div className="flex flex-row gap-[1rem] mt-[1.5rem] w-[10rem] text-sm">
                                        <p className="text-[#9cc9f3] font-semibold">Google</p>
                                        <p className="text-[#737373] font-semibold">Trending</p>
                                        <p className="text-[#737373] font-semibold">New</p>
                                    </div>
                                    <h1 className="text-[#252b42] text-2xl font-semibold">Loudest à la Madison #1 (L'integral)</h1>
                                    <p className="text-[#737373] text-md font-semibold lg:text-xl">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                    <div className="flex flex-row gap-[5rem] lg:gap-[7rem]">
                                        <div className="flex flex-row gap-[0.5rem] items-center">
                                            <AlarmClock className="text-[#23a6f0] w-4 h-4 lg:w-6 lg:h-6" />
                                            <p className="text-[#737373] font-semibold text-[12px] lg:text-[16px]">22 April 2021</p>
                                        </div>
                                        <div className="flex flex-row gap-[0.5rem] items-center">
                                            <ChartArea className="text-[#23856d] w-4 h-4 lg:w-6 lg:h-6" />
                                            <p className="text-[#737373] font-semibold text-[12px] lg:text-[16px]">10 comments</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row pb-[2.5rem] gap-[0.25rem]">
                                        <button className="text-[#737373] font-semibold">Learn More</button>
                                        <ChevronRight className="text-[#4db7f3] w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
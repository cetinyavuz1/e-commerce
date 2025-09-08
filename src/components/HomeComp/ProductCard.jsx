export default function ProductCard() {
    return (
        <>
            <div className="flex flex-col-reverse justify-center h-[120vh] lg:flex-row lg:h-[100vh] lg:gap-[15rem]">
                <img src="/assets/ProductCard3.png" alt="" className="lg:object-contain lg:w-[40vw]" />
                <div className="flex flex-col items-center gap-[2rem] lg:w-[40vw] lg:justify-center lg:items-start">
                    <p className="text-[#bdbdbd] font-bold lg:text-2xl">SUMMER 2025</p>
                    <h2 className="text-[#252b42] font-bold text-4xl text-center w-[12rem] lg:w-[40rem] lg:text-7xl lg:text-left">Part of the Neural Universe</h2>
                    <p className="text-[#737373] font-medium text-xl w-[13.5rem] text-center lg:w-[25rem] lg:text-left lg:font-normal lg:text-2xl">We know how large objects will act, but things on a small scale.</p>
                    <div className="flex flex-col items-center gap-[1rem] lg:flex-row">
                        <button className="bg-[#23a6f0] text-white w-40 h-14 rounded-lg font-medium lg:bg-[#2dc071]">BUY NOW</button>
                        <button className="border-[2px] border-[#23a6f0] w-40 h-14 rounded-lg text-[#23a6f0] font-medium lg:border-[#2dc071] lg:text-[#2dc071]">READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
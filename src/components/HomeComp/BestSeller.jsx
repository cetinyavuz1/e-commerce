export default function BestSeller() {
    const images = ["/assets/ProductCard2/ProductCard2-1.jpg",
        "/assets/ProductCard2/ProductCard2-2.jpg",
        "/assets/ProductCard2/ProductCard2-3.jpg",
        "/assets/ProductCard2/ProductCard2-4.jpg",
        "/assets/ProductCard2/ProductCard2-5.jpg",
        "/assets/ProductCard2/ProductCard2-6.jpg",
        "/assets/ProductCard2/ProductCard2-7.jpg",
        "/assets/ProductCard2/ProductCard2-8.jpg",
    ]

    return (
        <>
            <div className="flex flex-col items-center py-[5rem] gap-3">
                <h5 className="text-[#737373] font-medium text-2xl">Featured Products</h5>
                <h3 className="text-[#252b42] font-bold text-3xl w-[15rem] text-center lg:w-auto">BESTSELLER PRODUCTS</h3>
                <p className="w-45 text-center text-sm text-[#959595] lg:w-[50vw]">Problems trying to resolve the conflict between</p>
                <div className="pt-[2.5rem] flex flex-col gap-[4rem] lg:flex-row lg:flex-wrap lg:justify-center">
                    {images.map((elm, index) => {
                        return <div key={index} className="flex flex-col items-center gap-[1rem]">
                            <img src={elm} alt="" />
                            <p className="text-[#252b42] font-bold text-xl">Graphic Design</p>
                            <p className="text-[#737373] font-semibold text-xl">English Department</p>
                            <p className="text-[#c1c1c1] font-bold text-xl">$16.48 <span className="text-[#23856d]">$6.48</span></p>
                            <div className="flex flex-row gap-[0.5rem]">
                                <div className="bg-[#23a6f0] rounded-full w-4 h-4"></div>
                                <div className="bg-[#23856d] rounded-full w-4 h-4"></div>
                                <div className="bg-[#e77c40] rounded-full w-4 h-4"></div>
                                <div className="bg-[#252b42] rounded-full w-4 h-4"></div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
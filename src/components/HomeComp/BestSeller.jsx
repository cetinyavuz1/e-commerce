export default function BestSeller() {
    const images = ["/assets/productcard2/productcard2-1.jpg",
        "/assets/productcard2/productcard2-2.jpg",
        "/assets/productcard2/productcard2-3.jpg",
        "/assets/productcard2/productcard2-4.jpg",
        "/assets/productcard2/productcard2-5.jpg",
        "/assets/productcard2/productcard2-6.jpg",
        "/assets/productcard2/productcard2-7.jpg",
        "/assets/productcard2/productcard2-8.jpg",
    ]

    return (
        <>
            <div className="flex flex-col items-center py-15 gap-3">
                <h5 className="">Featured Products</h5>
                <h3>BESTSELLER PRODUCTS</h3>
                <p className="w-45 text-center text-sm text-[#959595] lg:w-[50vw]">Problems trying to resolve the conflict between</p>
                <div>
                    {images.map((elm, index) => {
                        return <div key={index}>
                            <img src={`/assets/ProductCard2/ProductCard2-${index + 1}.jpg`} alt="" />
                            <p>Graphic Design</p>
                            <p>English Department</p>
                            <p>$16.48 $6.48</p>
                            <div className="flex flex-row gap-1">
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
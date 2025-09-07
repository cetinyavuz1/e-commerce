export default function EditorsPick() {
    return (
        <>
            <div className="flex flex-col items-center py-15 bg-[#ededed]">
                <h2 className="text-2xl font-bold text-[#252b42] mb-2">EDITOR'S PICK</h2>
                <p className="w-45 text-center text-sm text-[#959595] lg:w-[50vw]">Problems trying to resolve the conflict between</p>
                <div className="pt-10 flex flex-col gap-10 lg:flex lg:flex-row lg:w-[90vw] lg:justify-center">
                    <div className="bg-cover h-[60vh] w-[80vw] flex items-end justify-start lg:w-[30vw]" style={{ backgroundImage: "url('/assets/ProductCard1/ProductCard1-1.jpg')" }}>
                        <p className="text-[#252b42] font-bold bg-white w-40 h-10 flex items-center justify-center mb-7 ml-7">MEN</p>
                    </div>
                    <div className="bg-cover h-[60vh] w-[80vw] flex items-end justify-start lg:w-[15vw]" style={{ backgroundImage: "url('/assets/ProductCard1/ProductCard1-2.jpg')" }}>
                        <p className="text-[#252b42] font-bold bg-white w-40 h-10 flex items-center justify-center mb-7 ml-7">WOMEN</p>
                    </div>
                    <div className="flex flex-col gap-10 lg:w-[15vw] lg:gap-[2vh]">
                        <div className="bg-cover h-[30vh] w-[80vw] flex items-end justify-start lg:w-[15vw] lg:h-[29vh]" style={{ backgroundImage: "url('/assets/ProductCard1/ProductCard1-3.jpg')" }}>
                            <p className="text-[#252b42] font-bold bg-white w-40 h-10 flex items-center justify-center mb-7 ml-7">ACCESSORIES</p>
                        </div>
                        <div className="bg-cover h-[30vh] w-[80vw] flex items-end justify-start lg:w-[15vw] lg:h-[29vh]" style={{ backgroundImage: "url('/assets/ProductCard1/ProductCard1-4.jpg')" }}>
                            <p className="text-[#252b42] font-bold bg-white w-40 h-10 flex items-center justify-center mb-7 ml-7">KIDS</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
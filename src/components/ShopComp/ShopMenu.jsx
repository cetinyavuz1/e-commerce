import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ShopMenu() {
    return (
        <div>
            <div className="flex flex-col items-center py-12 bg-[#fafafa]">
                <div className="flex flex-col gap-12 items-center pb-12 lg:flex-row lg:w-[90vw] lg:justify-between lg:px-6">
                    <p className="text-4xl font-bold text-[#252b42]">Shop</p>
                    <div className="flex flex-row">
                        <Link to="/" className="text-[#252b42] font-bold text-xl"> Home</Link>
                        <ChevronRight className="text-[#c5c5c5] w-8 h-8" />
                        <p className="text-[#737373] font-bold text-xl">Shop</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="relative bg-[url('/assets/ShopPage/placeholder.jpg')] w-80 h-80 bg-contain flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute text-2xl font-semibold text-white text-center flex flex-col gap-6">
                            <p>CLOTHS</p>
                            <p>5 Items</p>
                        </div>
                    </div>
                    <div className="relative bg-[url('/assets/ShopPage/placeholder.jpg')] w-80 h-80 bg-contain flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute text-2xl font-semibold text-white text-center flex flex-col gap-6">
                            <p>CLOTHS</p>
                            <p>5 Items</p>
                        </div>
                    </div>
                    <div className="relative bg-[url('/assets/ShopPage/placeholder.jpg')] w-80 h-80 bg-contain flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute text-2xl font-semibold text-white text-center flex flex-col gap-6">
                            <p>CLOTHS</p>
                            <p>5 Items</p>
                        </div>
                    </div>
                    <div className="relative bg-[url('/assets/ShopPage/placeholder.jpg')] w-80 h-80 bg-contain flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute text-2xl font-semibold text-white text-center flex flex-col gap-6">
                            <p>CLOTHS</p>
                            <p>5 Items</p>
                        </div>
                    </div>
                    <div className="relative bg-[url('/assets/ShopPage/placeholder.jpg')] w-80 h-80 bg-contain flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute text-2xl font-semibold text-white text-center flex flex-col gap-6">
                            <p>CLOTHS</p>
                            <p>5 Items</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
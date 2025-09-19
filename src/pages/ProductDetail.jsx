import { Link, useParams } from "react-router-dom";
import products from "../data/productData";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BestSeller from "../components/HomeComp/BestSeller";
import { ChevronRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <>
            <Header />
            <div className="flex flex-col gap-12 items-center pb-12 pt-10 lg:flex-row lg:w-[90vw] lg:justify-between lg:px-6">
                <div className="flex flex-row">
                    <Link to="/" className="text-[#252b42] font-bold text-xl"> Home</Link>
                    <ChevronRight className="text-[#c5c5c5] w-8 h-8" />
                    <p className="text-[#737373] font-bold text-xl">Shop</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-12">
                <img src={product.image} alt="" className="w-[80vw]" />
                <div className="flex flex-col items-center w-[80vw] gap-6">
                    <p className="w-full text-2xl font-semibold text-[#252b42]">{product.title}</p>
                    <div className="flex items-center gap-2 w-full">
                        {Array(5)
                            .fill()
                            .map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                        }`}
                                />
                            ))}
                        <span className="text-gray-600 text-md font-semibold">(10 Reviews)</span>
                    </div>
                    <p className="text-2xl font-bold text-[#252b42] w-full">${product.price}</p>
                    <p className="text-sm text-[#737373] w-full text-xl font-semibold">
                        Availability:{" "}
                        <span className="text-[#23a6f0] font-semibold">In Stock</span>
                    </p>
                    <p className="text-[#858585] leading-relaxed font-semibold pb-6 border-b border-[#cccccc]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequat door ENIM RELIT Mollie. Excitation venial
                        consequat sent nostrum met.
                    </p>
                    <div className="flex flex-row gap-[0.5rem] w-full">
                        <div className="bg-[#23a6f0] rounded-full w-8 h-8"></div>
                        <div className="bg-[#23856d] rounded-full w-8 h-8"></div>
                        <div className="bg-[#e77c40] rounded-full w-8 h-8"></div>
                        <div className="bg-[#252b42] rounded-full w-8 h-8"></div>
                    </div>
                    <div className="flex flex-row items-center gap-3 w-full">
                        <button className="bg-[#23a6f0] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
                            Select Options
                        </button>
                        <Heart className="border rounded-full border-[#e8e8e8] w-10 h-10 p-2" />
                        <ShoppingCart className="border rounded-full border-[#e8e8e8] w-10 h-10 p-2" />
                        <Eye className="border rounded-full border-[#e8e8e8] w-10 h-10 p-2" />
                    </div>
                </div>
            </div>
            <BestSeller />
            <Footer />
        </>

    );
}
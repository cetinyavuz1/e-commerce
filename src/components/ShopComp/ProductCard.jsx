import React from "react";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-2">
            <div className="w-full h-100 overflow-hidden rounded">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
            </div>

            <h3 className="mt-3 text-xl font-semibold text-[#252b42]">{product.title}</h3>
            <p className="text-xl text-[#737373] font-semibold">{product.department}</p>

            <div className="mt-2">
                <span className="text-lg font-bold text-[#bdbdbd] mr-2">
                    ${product.oldPrice.toFixed(2)}
                </span>
                <span className="text-lg font-bold text-green-600">
                    ${product.price.toFixed(2)}
                </span>
            </div>
            <div className="flex flex-row gap-[0.5rem]">
                <div className="bg-[#23a6f0] rounded-full w-4 h-4"></div>
                <div className="bg-[#23856d] rounded-full w-4 h-4"></div>
                <div className="bg-[#e77c40] rounded-full w-4 h-4"></div>
                <div className="bg-[#252b42] rounded-full w-4 h-4"></div>
            </div>
        </div>
    );
}
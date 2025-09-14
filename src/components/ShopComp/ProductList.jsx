import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../store/productSlice";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

export default function ProductList() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Seçiniz");
    const options = ["Popularity", "Price (decreasing)", "Price (increasing)"]
    const dispatch = useDispatch();
    const { items, currentPage, perPage, perPageMobile } = useSelector((state) => state.products);

    const totalPages = Math.ceil(items.length / perPage);
    const totalPagesMobile = Math.ceil(items.length / perPageMobile);
    const startIndex = (currentPage - 1) * perPage;
    const startIndexMobile = (currentPage - 1) * perPageMobile;
    const paginatedItems = items.slice(startIndex, startIndex + perPage);
    const paginatedMobileItems = items.slice(startIndexMobile, startIndexMobile + perPageMobile);

    const handlePageChange = (page) => {
        dispatch(setPage(page));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-6 py-8">
                <p className="max-lg:hidden font-bold text-[#737373]">Showing all {perPage} results</p>
                <p className="lg:hidden font-bold text-[#737373] text-xl">Showing all {perPageMobile} results</p>
                <div className="flex flex-row gap-4 items-center">
                    <p className="font-bold text-[#737373]">Views:</p>
                    <button className="border px-2 py-2 rounded-md border-[#eeeeee]"><LayoutGrid /></button>
                    <button className="border px-2 py-2 rounded-md border-[#eeeeee]"><List /></button>
                </div>
                <div className="relative w-48">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full flex justify-between items-center px-4 py-2 border border-[#e1e1e1] rounded-lg bg-[#f9f9f9] shadow text-[#737373]"
                    >
                        {selected}
                        <span>▼</span>
                    </button>

                    {open && (
                        <ul className="absolute mt-1 w-full border rounded-lg bg-white shadow z-10">
                            {options.map((opt) => (
                                <li
                                    key={opt}
                                    onClick={() => {
                                        setSelected(opt);
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#737373]"
                                >
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-lg:hidden">
                {paginatedItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="lg:hidden">
                {paginatedMobileItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-8 flex justify-center max-lg:hidden">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <div className="mt-8 flex justify-center lg:hidden">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPagesMobile}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}
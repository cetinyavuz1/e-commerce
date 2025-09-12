import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../store/productSlice";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

export default function ProductList() {
    const dispatch = useDispatch();
    const { items, currentPage, perPage } = useSelector((state) => state.products);

    const totalPages = Math.ceil(items.length / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const paginatedItems = items.slice(startIndex, startIndex + perPage);

    const handlePageChange = (page) => {
        dispatch(setPage(page));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {paginatedItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}
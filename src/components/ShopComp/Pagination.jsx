import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="inline-flex items-center space-x-2">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "border"
                    }`}
            >
                Prev
            </button>

            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`px-3 py-1 rounded ${p === currentPage ? "bg-blue-600 text-white" : "border"
                        }`}
                    aria-current={p === currentPage ? "page" : undefined}
                >
                    {p}
                </button>
            ))}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "border"
                    }`}
            >
                Next
            </button>
        </nav>
    );
}
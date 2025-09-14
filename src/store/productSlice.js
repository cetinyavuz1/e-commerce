import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        currentPage: 1,
        perPage: 12,
        perPageMobile: 5
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const { setProducts, setPage } = productsSlice.actions;
export default productsSlice.reducer;
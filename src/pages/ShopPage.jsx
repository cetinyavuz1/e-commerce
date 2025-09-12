import ProductList from "../components/ShopComp/ProductList";
import ShopMenu from "../components/ShopComp/ShopMenu";
import Header from "../layout/Header";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/productSlice";
import productsData from "../data/productData";

export default function ShopPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(productsData));
    }, [dispatch]);

    return (
        <>
            <Header />
            <ShopMenu />
            <ProductList />
        </>
    )
}
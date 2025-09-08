import BestSeller from "../components/HomeComp/BestSeller"
import EditorsPick from "../components/HomeComp/EditorsPick"
import FeaturedPosts from "../components/HomeComp/FeaturedPosts"
import HeaderSlider from "../components/HomeComp/HeaderSlider"
import MidSlider from "../components/HomeComp/MidSlider"
import ProductCard from "../components/HomeComp/ProductCard"

export default function ProductPage() {
    return (
        <>
            <HeaderSlider />
            <EditorsPick />
            <BestSeller />
            <MidSlider />
            <ProductCard />
            <FeaturedPosts />
        </>
    )
}
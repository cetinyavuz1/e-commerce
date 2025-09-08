import BestSeller from "../components/HomeComp/BestSeller"
import EditorsPick from "../components/HomeComp/EditorsPick"
import HeaderSlider from "../components/HomeComp/HeaderSlider"
import MidSlider from "../components/HomeComp/MidSlider"

export default function ProductPage() {
    return (
        <>
            <HeaderSlider />
            <EditorsPick />
            <BestSeller />
            <MidSlider />
        </>
    )
}
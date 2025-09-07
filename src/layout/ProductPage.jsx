import BestSeller from "../components/HomeComp/BestSeller"
import EditorsPick from "../components/HomeComp/EditorsPick"
import Slider from "../components/HomeComp/Slider"

export default function ProductPage() {
    return (
        <>
            <Slider />
            <EditorsPick />
            <BestSeller />
        </>
    )
}
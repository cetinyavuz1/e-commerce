import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
    return (
        <>
            <div className="text-[#737373] bg-[#fafafa] flex flex-col items-center gap-6 py-20 lg:flex-row lg:justify-center lg:gap-30">
                <FontAwesomeIcon icon={faHooli} size="7x" />
                <FontAwesomeIcon icon={faLyft} size="7x" />
                <FontAwesomeIcon icon={faPiedPiperHat} size="7x" />
                <FontAwesomeIcon icon={faStripe} size="7x" />
                <FontAwesomeIcon icon={faAws} size="7x" />
                <FontAwesomeIcon icon={faRedditAlien} size="7x" />
            </div>
        </>
    )
}
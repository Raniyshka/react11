import Slider from "react-slick";
import { Banner } from "../../components/Banner/Banner";
import { SliderElem } from "../../components/SliderElem/SliderElem";

export function Home(){
    return(
        <section>
            <Banner/>
            <SliderElem/>
        </section>
    )
}
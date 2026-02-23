import CategoriesCard from "../../modules/Home/CategoriesCard";
import useEmblaCarousel from "embla-carousel-react";

export default function HomeCarousel(){
    let [emblaRef] = useEmblaCarousel({loop: true})
    return(
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <CategoriesCard link="/charts/categories/lifestyle" title="Lifestyle" />
                    </div>
                    <div className="embla__slide">
                        <CategoriesCard link="/charts/categories/lifestyle" title="Lifestyle" />
                    </div>
                </div>
            </div>

            <button className="embla__prev">Scroll to prev</button>
            <button className="embla__next">Scroll to next</button>
        </div>

    )
}
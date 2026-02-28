import type { ReactNode } from "react"

interface SectionInterface {
    children: ReactNode;
}
export default function Section(props: SectionInterface){
    return(
        <section className="lg:px-20 px-5 py-5">
            {props.children}
        </section>
    )
}
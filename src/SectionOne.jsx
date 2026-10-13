import DivOne from "./DivOne";
import DivThree from "./DivThree";
import DivTwo from "./DivTwo";

export default function SectionOne(){
    return(
        <section className="sectionOne bg-white d-flex justify-content-between align-items-center">
                <DivOne />
                <DivTwo />
                <DivThree />
              </section>
    )
}
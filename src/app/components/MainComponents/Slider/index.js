import ImageSlider from "../../smallCompponents/ImageSlider/ImageSlider"
import SubHeading from "../../smallCompponents/Heading/SubHeading"

function Slider() {
  return (
    <section className="px-8 py-14">
        <SubHeading title='Fyntune is the trusted partner of' highlightedText='industry leaders'/>
        <ImageSlider />
    </section>
  )
}

export default Slider
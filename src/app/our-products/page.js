import Banner from '../components/MainComponents/Banner'
import Slider from '../components/MainComponents/Slider'
import FormSection from '../components/MainComponents/FormSection';
import Heading from '../components/smallCompponents/Heading/Heading';

export default function OurProducts() {
  return (
    <main className="bg-[#F9F9FF]">
      <Banner>
        <Heading FirstTitle="Step into Tomorrow: Unveil modern"  SecondTitle='insurance. Explore innovative solutions'  ThirdTitle="for a secure future"/>
      </Banner>
      <Slider />
      <FormSection />
    </main>
  );
}
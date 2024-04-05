import Banner from '../../MainComponents/Banner'
import Slider from '../../MainComponents/Slider'
import Cards from "../../MainComponents/Cards";
import InnovativeSolutions from "../../MainComponents/InnovativeSolutions";
import CustomerReview from "../../MainComponents/CustomerReview";
import FormSection from '../../MainComponents/FormSection';
import Heading from '../../smallCompponents/Heading/Heading';
import Button from '../../smallCompponents/Buttons/Button';

export default function HomePage() {
  return (
    <main className="bg-[#F9F9FF]">
      <Banner>
        <Heading FirstTitle="Streamlining insurance operations with" SecondTitle="modern infrastructure"/>
        <Button title='get demo now'/>
      </Banner>
      <Slider />
      <Cards />
      <InnovativeSolutions />
      <CustomerReview />
      <FormSection />
    </main>
  );
}
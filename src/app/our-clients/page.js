import Banner from '../components/MainComponents/Banner'
import Slider from '../components/MainComponents/Slider'
import CustomerReview from "../components/MainComponents/CustomerReview";
import FormSection from '../components/MainComponents/FormSection';
import Heading from '../components/smallCompponents/Heading/Heading';
import OurClient from '../components/Pages/OurClient';

export default function OurCustomer() {
  return (
    <main className="bg-[#F9F9FF]">
      <Banner>
        <Heading FirstTitle="Our organization forms strong"  SecondTitle='partnerships with top-tier entities across'  ThirdTitle="all facets of the insurance sector."/>
      </Banner>
      <OurClient />
      <CustomerReview />
      <Slider />
      <FormSection />
    </main>
  );
}
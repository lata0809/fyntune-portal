import Image from "next/image";
import Banner from './components/Banner'
import Slider from "./components/Slider";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      <Banner />
      <Slider />
      <Cards />
    </main>
  );
}

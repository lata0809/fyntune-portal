import Image from "next/image";
import Banner from './components/Banner'
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <Banner />
      <Slider />
    </main>
  );
}

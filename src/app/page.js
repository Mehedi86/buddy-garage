import Services from "./components/Services";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import PopularProducts from "./components/PopularProducts";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <PopularProducts/>
    </div>
  );
}

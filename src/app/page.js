import Services from "./components/Services";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner/>
      <Services/>
      <Contact/>
    </div>
  );
}

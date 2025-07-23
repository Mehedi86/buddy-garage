import Image from "next/image";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Services/>
      <Contact/>
    </div>
  );
}

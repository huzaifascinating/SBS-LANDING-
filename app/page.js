import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import Solutions from "./solutions";
import Pricing from "./pricing";
import Contact from "./contact";
import Footer from "./footer";
import TrustedCompanies from "./clients";

export default function Home() {
  return (
    <div className="font-sans text-gray-800"> 
      <Header/>
      <Hero/>
      <Features/>
      <Solutions/>
      <TrustedCompanies/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

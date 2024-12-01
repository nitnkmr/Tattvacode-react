import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import Technology from "./component/Technology";

export default function App() {
  return (
   <div className="app bg-slate-950 w-screen text-white">
          <Navbar/>
          <Hero/>
          <Pricing/>
          <Technology/>
          <Contact/>
          <Footer/>
   </div>
  )
}
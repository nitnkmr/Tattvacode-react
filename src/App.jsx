import Carousel from "./component/Carousel";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import Technology from "./component/Technology";
import Testimonial from "./component/Testimonial";

export default function App() {
  return (
   <div className="app bg-slate-950 z-0 w-screen text-white">
          <Navbar/>
          <Hero/>
          <Pricing/>
          <Technology/>
          <Carousel/>
          <Testimonial/>
          <Contact/>
          <Footer/>
   </div>
  )
}
import AboutSectionOne from "@/components/propos/AboutSectionOne";
import AboutSectionTwo from "@/components/propos/AboutSectionTwo";
import Blog from "@/components/projet";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import {Inter} from "next/font/google"
import MapboxMap from "@/components/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
      <MapboxMap/>
    </>
  );
}

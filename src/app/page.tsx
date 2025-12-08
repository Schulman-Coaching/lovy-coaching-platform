import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Courses from "@/components/home/Courses";
import Certifications from "@/components/home/Certifications";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <Certifications />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}

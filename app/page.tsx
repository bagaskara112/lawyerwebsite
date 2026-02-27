import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import ServiceCard from "@/components/ServiceCard";
import Workflow from "@/components/Workflow";
import AboutProfile from "@/components/AboutProfile";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <ServiceCard />
      <Workflow />
      <AboutProfile />
      <FAQ />
    </>
  );
}

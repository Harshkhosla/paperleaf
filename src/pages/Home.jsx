import HeroSection from "../components/home/HeroSection.jsx";
import CategoryStrip from "../components/home/CategoryStrip.jsx";
import TopSellers from "../components/home/TopSellers.jsx";
import AboutTeaser from "../components/home/AboutTeaser.jsx";
import PaperVsPlastic from "../components/home/PaperVsPlastic.jsx";
import SustainabilityCTA from "../components/home/SustainabilityCTA.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function Home() {
  useDocumentTitle();
  return (
    <>
      <HeroSection />
      <CategoryStrip />
      <TopSellers />
      <AboutTeaser />
      <PaperVsPlastic />
      <SustainabilityCTA />
      {/* <BlogsGrid /> */}
    </>
  );
}

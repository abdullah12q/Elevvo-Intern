import "./App.css";
import TopSection from "./components/TopSection";
import Section from "./components/Section";
import Features from "./components/FeaturesSection/Features";
import Reviews from "./components/ReviewsSection/Reviews";
import Pricing from "./components/PricingSection/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-hidden bg-white text-gray-800">
      <TopSection />

      <Section>
        <Features />
      </Section>

      <Section>
        <Reviews />
      </Section>

      <Section>
        <Pricing />
      </Section>

      <Section footer>
        <Footer />
      </Section>
    </div>
  );
}

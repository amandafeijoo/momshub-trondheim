import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import FinalCTA from "../components/landing/FinalCTA";
import UpcomingEventsSection from "../components/landing/UpcomingEventsSection";
import GetInvolvedSection from "../components/landing/GetInvolvedSection";
import JoinCommunitySection from "../components/landing/JoinCommunitySection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <FinalCTA />
      <UpcomingEventsSection />
      <GetInvolvedSection />
      <JoinCommunitySection />
    </>
  );
}

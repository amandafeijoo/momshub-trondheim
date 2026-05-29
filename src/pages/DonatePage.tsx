import styled from "styled-components";

import DonateHero from "../components/marketplace/categories/donate/DonateHero";
import DonateListings from "../components/marketplace/categories/donate/DonateListings";
import DonateSection from "../components/marketplace/categories/donate/DonateSection";
import DonateHowItWorks from "../components/marketplace/categories/donate/DonateHowItWorks";
import DonateForm from "../components/marketplace/categories/donate/DonateForm";

export default function DonatePage() {
  return (
    <Page>
      <DonateHero />
      <DonateSection />
      <DonateHowItWorks />
      <DonateListings />
      <DonateForm />
    </Page>
  );
}

const Page = styled.main`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background: rgba(255, 248, 241, 0.35);
`;

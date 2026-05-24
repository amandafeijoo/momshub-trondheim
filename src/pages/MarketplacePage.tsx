import styled from "styled-components";
import MarketplaceHero from "../components/marketplace/MarketplaceHero";
import MarketplaceExperience from "../components/marketplace/MarketplaceExperience/MarketplaceExperience";
import MarketplaceFeatured from "../components/marketplace/MarketplaceFeatured";
import MarketplaceNearbyListings from "../components/marketplace/MarketplaceNearbyListings";
import MarketplaceHandmadeSection from "../components/marketplace/MarketplaceHandmadeSection";
import MarketplaceDonationSection from "../components/marketplace/MarketplaceDonationSection";

export default function MarketplacePage() {
  return (
    <Page>
      <MarketplaceHero />
      <MarketplaceExperience />
      <MarketplaceFeatured />
      <MarketplaceNearbyListings />
      <MarketplaceHandmadeSection />
      <MarketplaceDonationSection />
    </Page>
  );
}

const Page = styled.main`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background: rgba(255, 248, 241, 0.35);
`;

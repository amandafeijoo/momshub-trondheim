import styled from "styled-components";

import CommunityHero from "../components/community/CommunityHero";
import NearbyCirclesSection from "../components/community/NearbyCirclesSection";
import MomsNearbySection from "../components/community/MomsNearbySection";

export default function CommunityPage() {
  return (
    <Page>
      <CommunityHero />
      <NearbyCirclesSection />
      <MomsNearbySection />
    </Page>
  );
}

const Page = styled.main`
  position: relative;
  z-index: 2;
  min-height: 100vh;
`;

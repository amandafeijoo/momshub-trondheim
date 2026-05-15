import styled from "styled-components";
import { motion } from "framer-motion";

const moms = [
  {
    name: "Sofia",
    country: "Spain",
    stage: "Mom of a 2 month old baby",
    lookingFor: "Looking for stroller walks nearby",
    gradient: "linear-gradient(135deg, #f8b4ad, #f6dfcf)",
  },
  {
    name: "Emma",
    country: "Norway",
    stage: "First-time mom",
    lookingFor: "Loves coffee meetups and baby activities",
    gradient: "linear-gradient(135deg, #b8c8aa, #f6dfcf)",
  },
  {
    name: "Maya",
    country: "India",
    stage: "Pregnant mom",
    lookingFor: "Looking for other international moms",
    gradient: "linear-gradient(135deg, #d7b79f, #f08f8b)",
  },
];

export default function MomsNearbySection() {
  return (
    <MomsSection>
      <SectionHeader
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <SmallTitle>Moms nearby</SmallTitle>
        <SectionTitle>
          Meet mothers building community close to you.
        </SectionTitle>
      </SectionHeader>

      <MomsGrid>
        {moms.map((mom, index) => (
          <MomCard
            key={mom.name}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <MomAvatar $gradient={mom.gradient}>{mom.name.charAt(0)}</MomAvatar>

            <MomInfo>
              <MomName>
                {mom.name} <span>— {mom.country}</span>
              </MomName>

              <MomStage>{mom.stage}</MomStage>
              <MomLooking>{mom.lookingFor}</MomLooking>
            </MomInfo>

            <ConnectButton>Connect</ConnectButton>
          </MomCard>
        ))}
      </MomsGrid>
    </MomsSection>
  );
}

const MomsSection = styled.section`
  position: relative;
  z-index: 2;
  padding: 8rem 1.5rem 9rem;
  background: rgba(255, 250, 246, 0.28);
`;

const SectionHeader = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto 4.5rem;
  text-align: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  margin-bottom: 1.2rem;
  font-weight: 800;
`;

const SectionTitle = styled.h2`
  font-size: clamp(3rem, 6vw, 5.4rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #2f2a25;
`;

const MomsGrid = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

const MomCard = styled(motion.article)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.2rem;

  padding: 1.2rem;
  border-radius: 30px;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(242, 140, 140, 0.14);
  backdrop-filter: blur(18px);

  box-shadow: 0 24px 70px rgba(74, 54, 44, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const MomAvatar = styled.div<{ $gradient: string }>`
  width: 76px;
  height: 76px;
  border-radius: 24px;

  display: grid;
  place-items: center;

  background: ${({ $gradient }) => $gradient};
  color: white;
  font-size: 1.8rem;
  font-weight: 900;
`;

const MomInfo = styled.div``;

const MomName = styled.h3`
  color: #4a3b33;
  font-size: 1.25rem;

  span {
    color: #8d7663;
    font-weight: 700;
  }
`;

const MomStage = styled.p`
  margin-top: 0.35rem;
  color: #5f554c;
  font-weight: 700;
`;

const MomLooking = styled.p`
  margin-top: 0.25rem;
  color: #7a6b5f;
`;

const ConnectButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.85rem 1.2rem;

  background: rgba(242, 140, 140, 0.12);
  color: #d96f7d;
  font-weight: 850;
  cursor: pointer;
`;

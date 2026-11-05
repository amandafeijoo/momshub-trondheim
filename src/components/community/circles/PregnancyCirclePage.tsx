import styled from "styled-components";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHeart,
  FiLock,
  FiMapPin,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function PregnancyCirclePage() {
  return (
    <Page>
 <BackgroundImage    src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1780158216/fondo_pregancy_community_ngu2hj.png"
    alt=""
  />
      <Glow />

      <Hero>

  <BackLink to="/community">
    ← Back to circles
  </BackLink>

  <Tag>Pregnancy Circle</Tag>

  <Title>
    Pregnancy in Norway
    <span>doesn’t have to feel unfamiliar.</span>
  </Title>

  <Text>
    A gentle circle for pregnant moms in Trondheim who want to understand
    the local system, ask real questions and meet women preparing for
    birth too.
  </Text>

  <Actions>
    <PrimaryButton to="/login?redirect=/community/pregnancy">
      Create profile to join <FiArrowRight />
    </PrimaryButton>

    <SecondaryButton to="/community">
      Explore other circles
    </SecondaryButton>
  </Actions>
</Hero>

      <MainContent>
        <IntroBlock>
          <SectionLabel>Is this circle for you?</SectionLabel>

          <LargeText>
            Join if you are pregnant in Trondheim, new to Norway, unsure how
            the system works, or simply want to meet other moms before baby
            arrives.
          </LargeText>
        </IntroBlock>

        <FeaturePanel>
          <PanelHeader>
            <IconBubble>
              <FiHeart />
            </IconBubble>

            <div>
              <PanelLabel>Inside the circle</PanelLabel>
              <PanelTitle>What you’ll find here</PanelTitle>
            </div>
          </PanelHeader>

          <FeatureList>
            <li>
              <FiCheckCircle />
              Understanding midwife and hospital routines.
            </li>

            <li>
              <FiCheckCircle />
              Preparing emotionally and practically for birth.
            </li>

            <li>
              <FiCheckCircle />
              Asking questions without feeling silly or alone.
            </li>

            <li>
              <FiCheckCircle />
              Meeting moms in the same stage of pregnancy.
            </li>

            <li>
              <FiCheckCircle />
              Sharing useful local tips about life with baby in Trondheim.
            </li>
          </FeatureList>
        </FeaturePanel>

        <SplitSection>
          <TextColumn>
            <SectionLabel>Local and personal</SectionLabel>

            <SectionTitle>
              Built around real
              <span>motherhood moments.</span>
            </SectionTitle>

            <Paragraph>
              This circle is not meant to replace medical advice. It is a soft
              community space where moms can feel informed, supported and less
              alone while preparing for birth in Norway.
            </Paragraph>
          </TextColumn>

          <MiniCards>
            <MiniCard>
              <FiMapPin />
              <h3>Trondheim based</h3>
              <p>Designed for local moms navigating pregnancy here.</p>
            </MiniCard>

            <MiniCard>
              <FiMessageCircle />
              <h3>Gentle conversations</h3>
              <p>Questions, experiences and emotional support.</p>
            </MiniCard>

            <MiniCard>
              <FiShield />
              <h3>Safer access</h3>
              <p>Profiles help keep the community more real and trusted.</p>
            </MiniCard>
          </MiniCards>
        </SplitSection>

        <AccessCard>
          <AccessIcon>
            <FiLock />
          </AccessIcon>

          <AccessContent>
            <SectionLabel>How access works</SectionLabel>

            <AccessTitle>
              Create a profile before joining.
            </AccessTitle>

            <Paragraph>
              To keep MomsHub safe, you’ll create a simple profile before
              requesting access. This helps protect the community, reduce fake
              users and prepare the marketplace for real mom-to-mom exchanges.
            </Paragraph>
          </AccessContent>

          <PrimaryButton to="/login?redirect=/community/pregnancy">
            Create profile to join <FiArrowRight />
          </PrimaryButton>
        </AccessCard>
      </MainContent>
    </Page>
  );
}

const Page = styled.main`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  isolation: isolate;

  padding: 8rem 1.5rem 5rem;

  background: #fffaf6;
  z-index:2;
`;

const Glow = styled.div`
  position: absolute;
  width: 48rem;
  height: 48rem;

  left: 50%;
  top: 7rem;

  transform: translateX(-50%);
  border-radius: 50%;

  background:
    radial-gradient(circle, rgba(242, 140, 140, 0.2), transparent 62%),
    radial-gradient(circle, rgba(216, 191, 141, 0.16), transparent 78%);

  filter: blur(50px);
  pointer-events: none;
`;

const Hero = styled.section`
  position: relative;
  z-index: 2;

  max-width: 1020px;
  margin: 0 auto 5rem;

  text-align: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 760px;

  object-fit: cover;
  object-position: center top;

  z-index: -4;
  opacity: 0.95;

  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    height: 720px;
    object-position: center top;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;

  color: #a98c78;
  text-decoration: none;

  font-size: 0.9rem;
  font-weight: 800;
`;

const Tag = styled.p`
  margin-bottom: 1rem;

  color: #c9959a;

  text-transform: uppercase;
  letter-spacing: 0.3em;

  font-size: 0.75rem;
  font-weight: 900;
`;

const Title = styled.h1`
  font-size: clamp(3.4rem, 7vw, 6.8rem);
  line-height: 0.86;
  letter-spacing: -0.08em;

  color: #4a3b33;

  span {
    display: block;
    color: #b99584;
  }
`;

const Text = styled.p`
  max-width: 700px;
  margin: 1.6rem auto 0;

  color: #6f625a;

  font-size: clamp(1.02rem, 1.4vw, 1.25rem);
  line-height: 1.8;
`;

const Actions = styled.div`
  margin-top: 2.5rem;

  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  padding: 1rem 1.35rem;

  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  gap: 0.65rem;

  background: linear-gradient(135deg, #f28c8c, #e98594);
  color: white;

  text-decoration: none;
  font-weight: 900;

  box-shadow:
    0 18px 42px rgba(242, 140, 140, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 24px 56px rgba(242, 140, 140, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.36);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1rem 1.35rem;

  border-radius: 999px;
  border: 1px solid rgba(178, 144, 120, 0.24);

  background: rgba(255, 255, 255, 0.58);
  color: #7d6658;

  text-decoration: none;
  font-weight: 900;

  backdrop-filter: blur(14px);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.82);
  }
`;

const MainContent = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1120px;
  margin: 0 auto;
`;

const IntroBlock = styled.section`
  max-width: 880px;
  margin: 0 auto 3rem;

  text-align: center;
`;

const SectionLabel = styled.p`
  margin-bottom: 1rem;

  color: #c9959a;

  text-transform: uppercase;
  letter-spacing: 0.28em;

  font-size: 0.7rem;
  font-weight: 900;
`;

const LargeText = styled.p`
  color: #4a3b33;

  font-size: clamp(1.6rem, 3vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.055em;

  max-width: 900px;
  margin: 0 auto;
`;

const FeaturePanel = styled.section`
  padding: 2rem;

  border-radius: 38px;

  background:
    radial-gradient(circle at 20% 0%, rgba(242, 140, 140, 0.13), transparent 34%),
    rgba(255, 255, 255, 0.62);

  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(20px);

  box-shadow:
    0 30px 90px rgba(74, 54, 44, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.92);
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.8rem;
`;

const IconBubble = styled.div`
  width: 56px;
  height: 56px;

  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  background: rgba(242, 140, 140, 0.13);
  border: 1px solid rgba(242, 140, 140, 0.22);

  font-size: 1.25rem;
`;

const PanelLabel = styled.p`
  color: #b99584;

  text-transform: uppercase;
  letter-spacing: 0.22em;

  font-size: 0.68rem;
  font-weight: 900;
`;

const PanelTitle = styled.h2`
  margin-top: 0.25rem;

  color: #4a3b33;

  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
`;

const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 1rem;

    border-radius: 22px;

    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    background: rgba(255, 250, 246, 0.72);

    color: #655850;
    line-height: 1.55;
    font-weight: 700;

    svg {
      margin-top: 0.2rem;
      flex-shrink: 0;
      color: #f28c8c;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const SplitSection = styled.section`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const TextColumn = styled.div``;

const SectionTitle = styled.h2`
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  line-height: 0.9;
  letter-spacing: -0.075em;

  color: #4a3b33;

  span {
    display: block;
    color: #b99584;
  }
`;

const Paragraph = styled.p`
  margin-top: 1.4rem;

  color: #6f625a;

  font-size: 1.04rem;
  line-height: 1.8;
`;

const MiniCards = styled.div`
  display: grid;
  gap: 1rem;
`;

const MiniCard = styled.article`
  padding: 1.2rem;

  border-radius: 26px;

  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(178, 144, 120, 0.14);

  box-shadow: 0 18px 60px rgba(74, 54, 44, 0.07);

  svg {
    color: #f28c8c;
    font-size: 1.3rem;
  }

  h3 {
    margin-top: 0.8rem;
    color: #4a3b33;
    letter-spacing: -0.04em;
  }

  p {
    margin-top: 0.45rem;
    color: #6f625a;
    line-height: 1.6;
  }
`;

const AccessCard = styled.section`
  margin-top: 5rem;
  padding: 2rem;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: center;

  border-radius: 38px;

  background:
    radial-gradient(circle at 10% 0%, rgba(216, 191, 141, 0.18), transparent 36%),
    rgba(255, 255, 255, 0.62);

  border: 1px solid rgba(216, 191, 141, 0.2);
  backdrop-filter: blur(20px);

  box-shadow:
    0 28px 90px rgba(74, 54, 44, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.92);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const AccessIcon = styled.div`
  width: 58px;
  height: 58px;

  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #b99584;
  background: rgba(216, 191, 141, 0.14);
  border: 1px solid rgba(216, 191, 141, 0.25);

  font-size: 1.35rem;
`;

const AccessContent = styled.div``;

const AccessTitle = styled.h2`
  color: #4a3b33;

  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
`;
import styled from "styled-components";
import { motion } from "framer-motion";

const highlights = [
  "Find moms who understand your journey",
  "Discover local meetups and family activities",
  "Exchange baby items easily and locally",
];

export default function AboutSection() {
  return (
    <Section>
      <Container
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <Left>
          <SmallTitle>About MomsHub</SmallTitle>

          <Title>
            Built for the mothers building a life far from home.
          </Title>

          <MiniText>
            A soft landing space for international moms in Trondheim — made for
            connection, support and everyday motherhood.
          </MiniText>
        </Left>

        <Right>
          <GlassCard>
            <Number>01</Number>

            <CardTitle>A community that feels close.</CardTitle>

            <Description>
              MomsHub Trondheim helps mothers connect, share experiences,
              discover local activities and find support while navigating
              motherhood abroad.
            </Description>

            <List>
              {highlights.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </GlassCard>
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 9rem 1.5rem;
  background: rgba(255, 250, 246, 0.28);
`;

const Container = styled(motion.div)`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  margin-bottom: 1.2rem;
  font-weight: 800;
`;

const Title = styled.h2`
  max-width: 720px;
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #2f2a25;
`;

const MiniText = styled.p`
  max-width: 520px;
  margin-top: 2rem;
  font-size: 1.08rem;
  line-height: 1.8;
  color: #6b5f55;
`;

const GlassCard = styled.div`
  position: relative;
  width: min(100%, 540px);
  padding: 2.4rem;
  border-radius: 34px;

  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(18px);

  box-shadow:
    0 30px 90px rgba(74, 54, 44, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
`;

const Number = styled.span`
  display: inline-flex;
  margin-bottom: 2rem;

  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #f28c8c;
`;

const CardTitle = styled.h3`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1;
  letter-spacing: -0.045em;
  color: #4a3b33;
  margin-bottom: 1.2rem;
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.85;
  color: #5f554c;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 2rem;
  display: grid;
  gap: 0.85rem;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 1.6rem;
  color: #4f453d;
  font-weight: 700;
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f28c8c;
    box-shadow: 0 0 18px rgba(242, 140, 140, 0.55);
  }
`;
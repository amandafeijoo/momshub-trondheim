
import styled from "styled-components";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Meaningful friendships",
    description: "Connect with moms who understand your journey.",
  },
  {
    title: "Shared experiences",
    description:
      "Coffee meetups, stroller walks, workshops and family activities.",
  },
  {
    title: "A place to belong",
    description:
      "Different cultures, stories and experiences coming together.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about">
      <Container
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Left>
          <SmallTitle>01 / ABOUT MOMSHUB</SmallTitle>

          <Title>
            Far from home
            <Accent>Closer together</Accent>
          </Title>

          <MiniText>
            Moving to a new country can be exciting, but
            motherhood far from family and familiar faces
            can feel lonely.
          </MiniText>

          <MiniText>
            MomsHub Trondheim was created to bring
            international mothers together, helping them
            build friendships, share experiences and find
            a sense of belonging.
          </MiniText>
        </Left>

        <Right>
          <GlassCard>
            <CardLabel>WHAT WE BELIEVE</CardLabel>

            <CardTitle>
              A community that feels close.
            </CardTitle>

            <Description>
              Because motherhood feels better when
              we have someone to share it with.
            </Description>

            <List>
              {highlights.map((item) => (
                <ListItem key={item.title}>
                  <Icon aria-hidden="true">✳</Icon>

                  <ItemContent>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription>
                      {item.description}
                    </ItemDescription>
                  </ItemContent>
                </ListItem>
              ))}
            </List>
          </GlassCard>
        </Right>
      </Container>
    </Section>
  );
}

/* =========================
   SECTION
========================= */

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 8rem 1.5rem;
  background: rgba(250, 245, 239, 0.65);

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(3rem, 6vw, 6rem);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Left = styled.div`
  min-width: 0;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

/* =========================
   LEFT CONTENT
========================= */

const SmallTitle = styled.p`
  color: #ad756b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 1.8rem;
`;

const Title = styled.h2`
  margin: 0 0 2rem;
  max-width: 620px;

  color: #624b41;
  font-size: clamp(3.2rem, 5vw, 5rem);
  font-weight: 750;
  line-height: 1.08;
  letter-spacing: -0.055em;

  @media (max-width: 768px) {
    font-size: clamp(2.8rem, 10vw, 4rem);
  }
`;

const Accent = styled.span`
  display: block;
  color: #bb8178;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.045em;
  margin-top: 0.2rem;
`;

const MiniText = styled.p`
  max-width: 520px;
  margin: 0 0 1rem;

  font-size: 1.05rem;
  line-height: 1.85;
  font-weight: 400;
  color: #62534c;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* =========================
   RIGHT CARD
========================= */

const GlassCard = styled.div`
  width: min(100%, 530px);
  padding: clamp(1.7rem, 3vw, 2.8rem);
  border-radius: 28px;

  background: rgba(255, 252, 249, 0.92);
  border: 1px solid #efddd4;

  backdrop-filter: blur(14px);
  box-shadow: 0 20px 60px rgba(98, 75, 65, 0.07);

  @media (max-width: 768px) {
    border-radius: 22px;
  }
`;

const CardLabel = styled.p`
  margin: 0 0 1.5rem;

  color: #bb8178;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.18em;
`;

const CardTitle = styled.h3`
  margin: 0 0 1.2rem;

  font-size: clamp(1.8rem, 2.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.045em;
  color: #624b41;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: #76645b;
`;

/* =========================
   HIGHLIGHTS
========================= */

const List = styled.ul`
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;

  display: grid;
  gap: 1.6rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 12px;

  background: #f8ebe5;
  color: #bb8178;
  font-size: 1.25rem;
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h4`
  margin: 0 0 0.3rem;

  color: #624b41;
  font-size: 0.96rem;
  font-weight: 700;
`;

const ItemDescription = styled.p`
  margin: 0;

  color: #76645b;
  font-size: 0.88rem;
  line-height: 1.65;
`;

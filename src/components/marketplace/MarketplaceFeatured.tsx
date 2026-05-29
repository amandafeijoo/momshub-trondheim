import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiGift,
  FiHeart,
  FiMapPin,
  FiRefreshCw,
  FiStar,
  FiBookmark,
} from "react-icons/fi";

const items = [
  {
    title: "Hand-knitted baby set",
    type: "HANDMADE",
    price: "250 NOK",
    location: "Øya",
    icon: <FiHeart />,
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779642415/knitted_o8if6m.png",
    text: "Soft handmade pieces created by a local mom.",
    badge: "Handmade favorite",
    saved: "18 moms saved this",
  },
  {
    title: "Newborn clothes bundle",
    type: "DONATION",
    price: "Free",
    location: "Lade",
    icon: <FiGift />,
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop",
    text: "Clean newborn essentials ready for another baby.",
    badge: "Free gift",
    saved: "Useful donation",
  },
  {
    title: "Stroller in good condition",
    type: "SECOND HAND",
    price: "1 200 NOK",
    location: "Solsiden",
    icon: <FiMapPin />,
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779642632/stroller_h79upj.png",
    text: "A trusted everyday stroller with plenty of life left.",
    badge: "Most saved",
    saved: "24 moms saved this",
  },
  {
    title: "Wooden toys exchange",
    type: "EXCHANGE",
    price: "Swap",
    location: "Bakklandet",
    icon: <FiRefreshCw />,
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1200&auto=format&fit=crop",
    text: "Exchange toys your baby has outgrown.",
    badge: "Circular pick",
    saved: "Popular swap",
  },
];

export default function MarketplaceFeatured() {
  return (
    <Section>
      <Header
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <SmallTitle>Popular this week</SmallTitle>

        <Title>
          Most loved finds,
          <span> saved by moms nearby.</span>
        </Title>

        <IntroText>
          A weekly selection based on saved items, useful donations, fair
          prices, handmade pieces and listings getting attention in Trondheim.
        </IntroText>
      </Header>

      <Grid>
        {items.map((item, index) => (
          <Card
            key={item.title}
            $large={index === 0}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.28 }}
          >
            <CardTop>
              <Icon>{item.icon}</Icon>

              <TopTags>
                <FeaturedBadge>
                  <FiStar />
                  {item.badge}
                </FeaturedBadge>

                <Type>{item.type}</Type>
              </TopTags>
            </CardTop>

            <ProductImage $large={index === 0}>
              <img src={item.image} alt={item.title} />
            </ProductImage>

            <Content>
              <Meta>
                <span>{item.price}</span>
                <span>{item.location}</span>
              </Meta>

              <SavedInfo>
                <FiBookmark />
                {item.saved}
              </SavedInfo>

              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>

              <Action>
                View item <span>→</span>
              </Action>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 8rem 1.5rem;
  background: radial-gradient(
      circle at 50% 18%,
      rgba(242, 140, 140, 0.12),
      transparent 34%
    ),
    rgba(255, 250, 246, 0.42);
`;

const Header = styled(motion.div)`
  max-width: 980px;
  margin: 0 auto 5rem;
  text-align: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.78rem;
  color: #a96f5f;
  margin-bottom: 1.2rem;
  font-weight: 900;
`;

const Title = styled.h2`
  max-width: 980px;
  margin: 0 auto;
  font-size: clamp(3.2rem, 6vw, 5.7rem);
  line-height: 0.9;
  letter-spacing: -0.07em;
  color: #2f2a25;

  span {
    display: block;
    color: #8d7663;
  }
`;

const IntroText = styled.p`
  max-width: 720px;
  margin: 1.7rem auto 0;
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.75;
  color: #6b5f55;
`;

const Grid = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 0.9fr;
  gap: 1.2rem;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)<{ $large?: boolean }>`
  min-height: ${({ $large }) => ($large ? "640px" : "500px")};
  grid-row: ${({ $large }) => ($large ? "span 2" : "span 1")};
  padding: 1.5rem;
  border-radius: 36px;
  display: flex;
  flex-direction: column;

  background: radial-gradient(
      circle at 18% 10%,
      rgba(242, 140, 140, 0.18),
      transparent 36%
    ),
    rgba(255, 255, 255, 0.64);

  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(18px);
  box-shadow: 0 30px 90px rgba(74, 54, 44, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);

  @media (max-width: 1050px) {
    grid-row: span 1;
    min-height: 520px;
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Icon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #f28c8c;
  font-size: 1.25rem;
  background: rgba(242, 140, 140, 0.13);
  border: 1px solid rgba(242, 140, 140, 0.18);
`;

const TopTags = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeaturedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.48rem 0.72rem;
  border-radius: 999px;
  background: rgba(242, 140, 140, 0.11);
  border: 1px solid rgba(242, 140, 140, 0.18);
  color: #d8787d;
  font-size: 0.66rem;
  font-weight: 900;
`;

const Type = styled.span`
  padding: 0.48rem 0.72rem;
  border-radius: 999px;
  background: rgba(255, 250, 246, 0.78);
  border: 1px solid rgba(242, 140, 140, 0.18);
  color: #8c6b5c;
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

const ProductImage = styled.div<{ $large?: boolean }>`
  width: 100%;
  height: ${({ $large }) => ($large ? "300px" : "210px")};
  margin: 1.4rem 0 1.5rem;
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 250, 246, 0.7);
  border: 1px solid rgba(242, 140, 140, 0.14);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Content = styled.div``;

const Meta = styled.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;

  span {
    padding: 0.42rem 0.65rem;
    border-radius: 999px;
    background: rgba(255, 250, 246, 0.7);
    border: 1px solid rgba(242, 140, 140, 0.14);
    color: #8c6b5c;
    font-size: 0.72rem;
    font-weight: 850;
  }
`;

const SavedInfo = styled.p`
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #c9896f;
  font-size: 0.78rem;
  font-weight: 900;

  svg {
    color: #f28c8c;
  }
`;

const CardTitle = styled.h3`
  max-width: 360px;
  font-size: clamp(2rem, 3vw, 3.3rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #4a3b33;
`;

const CardText = styled.p`
  max-width: 350px;
  margin-top: 1rem;
  font-size: 0.98rem;
  line-height: 1.7;
  color: #5f554c;
`;

const Action = styled.button`
  margin-top: 1.4rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: none;
  padding: 0;
  background: transparent;
  color: #f07f88;
  font-weight: 900;
  font-size: 0.95rem;
  cursor: pointer;

  span {
    font-size: 1.3rem;
  }
`;

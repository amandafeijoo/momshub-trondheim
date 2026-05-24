import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiMapPin,
  FiClock,
  FiGift,
  FiShoppingBag,
  FiRefreshCw,
} from "react-icons/fi";

const listings = [
  {
    title: "Newborn clothes bundle",
    type: "DONATION",
    price: "Free",
    area: "Lade",
    time: "Listed today",
    icon: <FiGift />,
  },
  {
    title: "Baby carrier",
    type: "SECOND HAND",
    price: "450 NOK",
    area: "Solsiden",
    time: "2 hours ago",
    icon: <FiShoppingBag />,
  },
  {
    title: "Wooden activity toys",
    type: "EXCHANGE",
    price: "Swap",
    area: "Bakklandet",
    time: "Yesterday",
    icon: <FiRefreshCw />,
  },
  {
    title: "Soft baby blanket",
    type: "HANDMADE",
    price: "300 NOK",
    area: "Øya",
    time: "This week",
    icon: <FiHeart />,
  },
];

export default function MarketplaceNearbyListings() {
  return (
    <Section>
      <Header
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <SmallTitle>Available nearby</SmallTitle>
        <Title>Local baby items shared by moms in Trondheim.</Title>
      </Header>

      <List>
        {listings.map((item, index) => (
          <Listing
            key={item.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Left>
              <Icon>{item.icon}</Icon>

              <Info>
                <Tag>{item.type}</Tag>
                <ItemTitle>{item.title}</ItemTitle>

                <Meta>
                  <span>
                    <FiMapPin /> {item.area}
                  </span>
                  <span>
                    <FiClock /> {item.time}
                  </span>
                </Meta>
              </Info>
            </Left>

            <Right>
              <Price>{item.price}</Price>
              <Action>View item →</Action>
            </Right>
          </Listing>
        ))}
      </List>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 8rem 1.5rem;
  background: rgba(255, 248, 241, 0.32);
`;

const Header = styled(motion.div)`
  max-width: 980px;
  margin: 0 auto 5rem;
  text-align: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  margin-bottom: 1.2rem;
  font-weight: 900;
`;

const Title = styled.h2`
  max-width: 950px;
  margin: 0 auto;

  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #2f2a25;
`;

const List = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

const Listing = styled(motion.article)`
  padding: 1.1rem;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  background: rgba(255, 255, 255, 0.64);
  border: 1px solid rgba(242, 140, 140, 0.15);
  backdrop-filter: blur(18px);

  box-shadow: 0 24px 70px rgba(74, 54, 44, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);

  transition: transform 0.35s ease, border-color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(242, 140, 140, 0.32);
    box-shadow: 0 34px 100px rgba(74, 54, 44, 0.13),
      inset 0 1px 0 rgba(255, 255, 255, 0.86);
  }

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 22px;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.35rem;

  background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.9),
      transparent 32%
    ),
    rgba(242, 140, 140, 0.13);

  border: 1px solid rgba(242, 140, 140, 0.16);
`;

const Info = styled.div``;

const Tag = styled.span`
  color: #c9896f;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

const ItemTitle = styled.h3`
  margin-top: 0.35rem;
  font-size: clamp(1.45rem, 2.6vw, 2.1rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
  color: #4a3b33;
`;

const Meta = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;

    color: #7a6b5f;
    font-size: 0.82rem;
    font-weight: 750;
  }

  svg {
    color: #c9896f;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Price = styled.p`
  color: #2f2a25;
  font-size: 1.1rem;
  font-weight: 900;
`;

const Action = styled.button`
  border: none;
  background: transparent;
  color: #f07f88;
  font-weight: 900;
  cursor: pointer;
`;

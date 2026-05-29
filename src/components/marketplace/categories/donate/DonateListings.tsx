import styled from "styled-components";
import { FiMapPin, FiHeart, FiArrowRight } from "react-icons/fi";

const donations = [
  {
    id: 1,
    title: "Baby clothes set",
    category: "Clothes",
    size: "62–68",
    location: "Trondheim",
    condition: "Good condition",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779642632/stroller_h79upj.png",
  },
  {
    id: 2,
    title: "Soft teddy bear",
    category: "Toys",
    size: "Baby",
    location: "Byåsen",
    condition: "Like new",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779661077/NEST_BABY_pm3u3z.png",
  },
  {
    id: 3,
    title: "Baby booties",
    category: "Clothes",
    size: "0–6 months",
    location: "Lade",
    condition: "Handmade",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779661526/BEDSIDECRIB_nx7i7n.png",
  },
];

export default function DonateListings() {
  return (
    <Section>
      <Header>
        <Kicker>Available donations</Kicker>
        <Title>Free baby items shared by local moms.</Title>
        <Text>
          Discover gently used baby essentials available for pickup around
          Trondheim.
        </Text>
      </Header>

      <Filters>
        <FilterButton $active>All</FilterButton>
        <FilterButton>Clothes</FilterButton>
        <FilterButton>Toys</FilterButton>
        <FilterButton>Essentials</FilterButton>
        <FilterButton>Nearby</FilterButton>
      </Filters>

      <Grid>
        {donations.map((item) => (
          <Card key={item.id}>
            <ImageWrap>
              <Image src={item.image} alt={item.title} />
              <Badge>Free</Badge>
            </ImageWrap>

            <CardBody>
              <Meta>
                {item.category} · {item.condition}
              </Meta>
              <CardTitle>{item.title}</CardTitle>

              <Info>
                <span>{item.size}</span>
                <span>
                  <FiMapPin />
                  {item.location}
                </span>
              </Info>

              <CardButton>
                View donation
                <FiArrowRight />
              </CardButton>
            </CardBody>

            <FavoriteButton aria-label="Save donation">
              <FiHeart />
            </FavoriteButton>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  padding: 8rem 1.5rem;
  background: #fff8f1;
`;

const Header = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const Kicker = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.75rem;
  font-weight: 900;
  color: #a56f65;
`;

const Title = styled.h2`
  max-width: 760px;
  margin: 1rem 0 0;
  font-size: clamp(3rem, 6vw, 5.6rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
  color: #2c2622;
`;

const Text = styled.p`
  max-width: 520px;
  margin-top: 1.3rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #665b52;
`;

const Filters = styled.div`
  max-width: 1180px;
  margin: 2.5rem auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(242, 140, 140, 0.45)" : "rgba(242, 140, 140, 0.18)"};

  border-radius: 999px;
  padding: 0.75rem 1rem;

  background: ${({ $active }) =>
    $active ? "rgba(242, 140, 140, 0.14)" : "rgba(255, 255, 255, 0.62)"};

  color: ${({ $active }) => ($active ? "#b7656c" : "#6f6258")};
  font-weight: 800;
  cursor: pointer;
`;

const Grid = styled.div`
  max-width: 1180px;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  position: relative;
  border-radius: 34px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(242, 140, 140, 0.15);
  box-shadow: 0 24px 70px rgba(74, 54, 44, 0.08);
`;

const ImageWrap = styled.div`
  position: relative;
  height: 270px;
  background: #f8f2eb;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Badge = styled.span`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 250, 246, 0.78);
  color: #e98189;
  font-weight: 900;
`;

const CardBody = styled.div`
  padding: 1.4rem;
`;

const Meta = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.68rem;
  font-weight: 900;
  color: #a56f65;
`;

const CardTitle = styled.h3`
  margin: 0.7rem 0 0;
  font-size: 1.5rem;
  color: #2c2622;
`;

const Info = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: #6f6258;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }
`;

const CardButton = styled.button`
  margin-top: 1.4rem;
  width: 100%;
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1rem;
  background: linear-gradient(135deg, #ffb4b4, #ea7f89);
  color: white;
  font-weight: 900;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const FavoriteButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;

  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;

  display: grid;
  place-items: center;

  background: rgba(255, 250, 246, 0.82);
  color: #e98189;
  cursor: pointer;
`;

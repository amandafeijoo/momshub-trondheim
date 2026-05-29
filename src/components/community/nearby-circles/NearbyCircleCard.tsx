import styled from "styled-components";

type NearbyCircle = {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  text: string;
  tag: string;
};

type Props = {
  circle: NearbyCircle;
  index: number;
  total: number;
};

export default function NearbyCircleCard({ circle, index, total }: Props) {
  return (
    <CircleCard>
      <CardTop>
        <CardIcon>{circle.icon}</CardIcon>
        <CardTag>{circle.tag}</CardTag>
      </CardTop>

      <CardContent>
        <CardNumber>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </CardNumber>

        <CardTitle>{circle.title}</CardTitle>
        <CardSubtitle>{circle.subtitle}</CardSubtitle>
        <CardText>{circle.text}</CardText>
      </CardContent>

      <CardButton>
        Join circle <span>→</span>
      </CardButton>
    </CircleCard>
  );
}

const CircleCard = styled.article`
  position: relative;
  width: 90%;
  height: 90%;

  padding: 1.8rem;
  border-radius: 38px;
  overflow: hidden;

  background: radial-gradient(
      circle at 20% 10%,
      rgba(242, 140, 140, 0.22),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(168, 191, 163, 0.18),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.68);

  border: 1px solid rgba(242, 140, 140, 0.18);
  backdrop-filter: blur(22px);

  box-shadow: 0 35px 110px rgba(74, 54, 44, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.85);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 1rem;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.25rem;

  border: 2px solid rgba(244, 189, 189, 0.18);

  background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.9),
      transparent 32%
    ),
    rgba(242, 140, 140, 0.13);
`;

const CardTag = styled.span`
  width: fit-content;

  padding: 0.7rem 0.85rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.76);
  border: 1px solid rgba(242, 140, 140, 0.18);

  color: #8c6b5c;

  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

const CardContent = styled.div`
  margin-top: 1rem;
`;

const CardNumber = styled.p`
  margin-bottom: 1rem;
  margin-top: -1rem;

  color: #c9896f;

  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

const CardTitle = styled.h3`
  font-size: clamp(2.3rem, 4.5vw, 3rem);
  line-height: 0.86;
  letter-spacing: -0.07em;

  color: #4a3b33;
`;

const CardSubtitle = styled.p`
  margin-top: 1.1rem;

  font-size: 1.05rem;
  font-weight: 800;

  color: #8d7663;
`;

const CardText = styled.p`
  margin-top: 0.9rem;

  line-height: 1.7;
  color: #5f554c;
  margin-bottom: 1rem;
`;

const CardButton = styled.button`
  width: fit-content;
  margin-top: 1.9rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 0.45rem;

  border: none;
  padding: 0;
  background: transparent;

  color: #f07f88;

  font-weight: 900;
  font-size: 1rem;
  letter-spacing: -0.02em;

  cursor: pointer;

  span {
    font-size: 1.4rem;
    line-height: 1;
    transition: transform 0.35s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

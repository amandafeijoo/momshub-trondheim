import styled from "styled-components";
import type { ReactNode } from "react";

type Circle = {
  title: string;
  icon: ReactNode;
  tag: string;
  subtitle: string;
  image?: string;
};

type Props = {
  circles: Circle[];
  progress: number;
};

export default function NearbyCirclesIntro({ circles, progress }: Props) {
  const wordScale = Math.max(0.46, 1 - progress * 1.8);
  const wordMove = Math.min(progress * 280, 85);

  return (
    <Intro>
      <Words style={{ transform: `scale(${wordScale})` }}>
        <RailWord style={{ transform: `translateX(-${wordMove}%)` }}>
          Nearby
        </RailWord>

        <RailWord style={{ transform: `translateX(${wordMove}%)` }}>
          Circles
        </RailWord>
      </Words>

      <CardsRow>
        {circles.slice(0, 4).map((circle, index) => {
          const start = 0.12 + index * 0.055;
          const localProgress = Math.min(
            Math.max((progress - start) / 0.08, 0),
            1
          );

          return (
            <RailCard
              key={circle.title}
              style={{
                opacity: localProgress,
                transform: `translateY(${55 - localProgress * 55}px) scale(${
                  0.9 + localProgress * 0.1
                })`,
              }}
            >
              {circle.image && (
                <IllustrationWrap>
                  <CardIllustration src={circle.image} alt={circle.title} />
                </IllustrationWrap>
              )}

              <CardTop>
                <RailIcon>{circle.icon}</RailIcon>
                <RailTag>{circle.tag}</RailTag>
              </CardTop>

              <RailContent>
                <RailTitle>{circle.title}</RailTitle>
                <RailText>{circle.subtitle}</RailText>
              </RailContent>
            </RailCard>
          );
        })}
      </CardsRow>

      <FineLine />
    </Intro>
  );
}

const Intro = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  min-height: 560px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Words = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
  transition: transform 0.08s linear;
`;

const RailWord = styled.h3`
  font-size: clamp(5rem, 13vw, 10rem);
  line-height: 0.78;
  font-weight: 500;
  letter-spacing: -0.085em;

  color: rgba(47, 42, 37, 0.92);
  transition: transform 0.08s linear;
`;

const CardsRow = styled.div`
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  margin-top: 4rem;
`;

const RailCard = styled.div`
  position: relative;

  width: 230px;
  height: 180px;
  padding: 1.45rem;
  padding-top: 6rem;
  border-radius: 34px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: visible;

  background: radial-gradient(
      circle at 50% 0%,
      rgba(242, 140, 140, 0.18),
      transparent 38%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(168, 191, 163, 0.14),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.74);

  border: 1px solid rgba(242, 140, 140, 0.22);
  backdrop-filter: blur(22px);

  box-shadow: 0 35px 90px rgba(74, 54, 44, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.88);

  transition: opacity 0.12s linear, transform 0.12s linear;
`;

const IllustrationWrap = styled.div`
  position: absolute;
  top: -58px;
  left: 50%;
  transform: translateX(-50%);

  width: 145px;
  height: 145px;
  border-radius: 50%;
  border: 2px solid rgba(244, 189, 189, 0.18);

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
    circle,
    rgba(255, 232, 226, 0.96) 0%,
    rgba(255, 232, 226, 0.72) 48%,
    rgba(255, 232, 226, 0.12) 72%,
    transparent 100%
  );

  filter: drop-shadow(0 18px 35px rgba(242, 140, 140, 0.22));
  pointer-events: none;
`;

const CardIllustration = styled.img`
  width: 82%;
  height: 82%;
  object-fit: contain;

  opacity: 0.88;
  mix-blend-mode: multiply;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RailIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.15rem;

  background: rgba(242, 140, 140, 0.13);
  border: 2px solid rgba(244, 189, 189, 0.18);
`;

const RailTag = styled.span`
  padding: 0.45rem 0.65rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.76);
  border: 1px solid rgba(242, 140, 140, 0.18);

  color: #8c6b5c;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.12em;
`;

const RailContent = styled.div``;

const RailTitle = styled.h4`
  font-size: clamp(1.65rem, 2.3vw, 2.25rem);
  line-height: 0.9;
  letter-spacing: -0.065em;
  color: #4a3b33;
`;

const RailText = styled.p`
  margin-top: 0.9rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #5f554c;
`;

const FineLine = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 5.5rem;
  left: 50%;
  width: min(700px, 70vw);
  height: 1px;

  transform: translateX(-50%);
  background: rgba(74, 59, 51, 0.14);
`;

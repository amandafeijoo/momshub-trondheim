import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const labels = [
  { text: "COMMUNITY", top: "18%", left: "10%" },
  { text: "MOTHERHOOD", top: "36%", right: "8%" },
  { text: "MEETUPS", top: "62%", left: "12%" },
  { text: "MARKETPLACE", top: "78%", right: "14%" },
  { text: "SUPPORT", top: "48%", left: "72%" },
  { text: "BETTER TOGETHER", top: "84%", left: "42%" },
];

export default function FloatingLabels() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-180px"]);

  return (
    <Wrapper style={{ y }}>
      {labels.map((label) => (
        <Tag
          key={label.text}
          $top={label.top}
          $left={label.left}
          $right={label.right}
        >
          {label.text}
        </Tag>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

const Tag = styled.div<{
  $top: string;
  $left?: string;
  $right?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};

  padding: 0.42rem 0.65rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.62);
  border: 1px solid rgba(242, 140, 140, 0.22);
  backdrop-filter: blur(12px);

  color: #8c6b5c;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;

  box-shadow: 0 12px 35px rgba(80, 65, 55, 0.06);

  @media (max-width: 768px) {
    display: none;
  }
`;
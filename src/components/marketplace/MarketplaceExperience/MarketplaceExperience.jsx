import { useRef } from "react";
import styled from "styled-components";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import CanvasScene from "./CanvasScene";
import OverlayContent from "./OverlayContent";

import {
  FiGift,
  FiHeart,
  FiBookOpen,
  FiShoppingBag,
  FiHome,
} from "react-icons/fi";

const marketplaceData = [
  {
    number: "01",
    title: "Donate",
    tag: "FREE",
    icon: <FiGift />,
    text: "Pass baby items forward for free and help another mom nearby.",
  },
  {
    number: "02",
    title: "Baby essentials",
    tag: "SECONDHAND",
    icon: <FiHome />,
    text: "Curated preloved baby clothes, strollers and everyday essentials.",
  },
  {
    number: "03",
    title: "Handmade",
    tag: "LOCAL MOMS",
    icon: <FiHeart />,
    text: "Discover knitted, sewn and handmade pieces created by mothers.",
  },
  {
    number: "04",
    title: "Toys & books",
    tag: "LITTLE FINDS",
    icon: <FiBookOpen />,
    text: "Stories, toys and small treasures ready for another home.",
  },
  {
    number: "05",
    title: "Pregnancy essentials",
    tag: "MOTHERHOOD",
    icon: <FiShoppingBag />,
    text: "Maternity clothes, pillows and support items for pregnancy.",
  },
];

export default function MarketplaceExperience() {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = marketplaceData.length;

    const index = Math.min(total - 1, Math.floor(latest * total));

    setActiveIndex(index);
  });

  return (
    <Section ref={sectionRef}>
      <StickyWrapper>
        {/* THREE.JS BACKGROUND */}
        <CanvasLayer>
          <CanvasScene activeIndex={activeIndex} progress={scrollYProgress} />
        </CanvasLayer>

        {/* HTML CONTENT */}
        <OverlayLayer>
          <OverlayContent items={marketplaceData} activeIndex={activeIndex} />
        </OverlayLayer>
      </StickyWrapper>
    </Section>
  );
}

/* =========================
   STYLES
========================= */

const Section = styled.section`
  position: relative;
  height: 650vh;
  background: #f8f2eb;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;

  width: 100%;
  height: 100vh;

  overflow: hidden;
`;

const CanvasLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const OverlayLayer = styled.div`
  position: relative;
  z-index: 5;

  width: 100%;
  height: 100%;
`;

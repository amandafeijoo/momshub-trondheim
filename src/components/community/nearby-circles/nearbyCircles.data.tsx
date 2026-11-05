import {
  FiCoffee,
  FiHeart,
  FiSun,
  FiGlobe,
  FiMessageCircle,
} from "react-icons/fi";

export const circles = [
  {
    title: "Pregnancy Circle",
    path: "/community/pregnancy",
    icon: <FiHeart />,
    subtitle: "For moms preparing for birth in Norway.",
    text: "A calm space to ask about pregnancy, midwives, hospital routines, birth preparation and the emotional journey before baby arrives.",
    sideLeft: "If you are pregnant and need guidance, calm answers and shared preparation.",
    sideRight: "For moms waiting for baby and learning how everything works here.",
    tag: "PREGNANCY",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778794442/pregnantmoms_lrsxlj.png",
  },

  {
    title: "Newborn Circle",
    path: "/community/newborn",
    icon: <FiHeart />,
    subtitle: "For the first months with your baby.",
    text: "Support for feeding, sleep, first walks, recovery, daily routines and the beautiful but exhausting newborn stage.",
    sideLeft: "If your baby is small and you need gentle support from moms in the same season.",
    sideRight: "For newborn days, tired mornings and tiny milestones.",
    tag: "NEWBORN",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778795648/newborns_ptl2sj.png",
  },

  {
    title: "International Moms",
    path: "/community/international-moms",
    icon: <FiGlobe />,
    subtitle: "For building a life and home in Trondheim.",
    text: "A circle for moms navigating language, culture, identity, loneliness, friendship and motherhood far from home.",
    sideLeft: "If you are raising your child between cultures and want to feel less alone.",
    sideRight: "Different languages, different stories, the same need for belonging.",
    tag: "GLOBAL",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778796087/families_woa2xj.png",
  },

  {
    title: "Coffee Meetups",
    path: "/community/coffee-meetups",
    icon: <FiCoffee />,
    subtitle: "For slow mornings and real conversations.",
    text: "Relaxed coffee gatherings where moms can meet, talk, laugh, share experiences and create friendships naturally.",
    sideLeft: "If you want an easy first step to meet other moms without pressure.",
    sideRight: "Warm drinks, honest conversations and new familiar faces.",
    tag: "MEETUPS",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778845573/coffeemeetups_ee9isa.png",
  },

  {
    title: "Walking Club",
    path: "/community/walking-club",
    icon: <FiSun />,
    subtitle: "For fresh air, movement and connection.",
    text: "Stroller-friendly walks around Trondheim for moms who want to move gently, talk freely and explore the city together.",
    sideLeft: "If sitting inside feels heavy and you need fresh air with company.",
    sideRight: "A simple way to connect while walking through Trondheim.",
    tag: "WALKS",
  },

  {
    title: "Support Circle",
    path: "/community/support-circle",
    icon: <FiMessageCircle />,
    subtitle: "For questions, doubts and emotional support.",
    text: "A safe circle for first-time moms, overwhelmed moms or anyone needing reassurance, honest conversations and emotional connection.",
    sideLeft: "If motherhood feels confusing, lonely or heavier than expected.",
    sideRight: "No question is too small. No feeling is too much.",
    tag: "SUPPORT",
  },
];

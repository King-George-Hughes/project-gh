import { analysis, consult, softDev, training, webDev } from "../assets";

const service = [
  {
    id: 1,
    title: "Software Development (Mobile, Desktop)",
    description:
      "Craft exceptional user experiences. From touchscreens to desktops, we deliver the perfect software solutions for any device....",
    image: softDev,
  },
  {
    id: 2,
    title: "Website and Web App",
    description:
      "Need a digital presence? We build websites and web apps that bring your ideas to life. Boost your reach and engagement. Websites and web apps made easy...",
    image: webDev,
  },
  {
    id: 3,
    title:
      "Data Analysis: Income Assurance, Reconciliation, Fraud Monitoring,Process Automation",
    description:
      "Streamline operations, safeguard revenue, and empower growth. Our data analysis unlocks actionable insights for income...",
    image: analysis,
  },
  {
    id: 4,
    title:
      "Trainings (DBMS, Programming, Microsoft Power BI ,Systems Administration, Networking etc)",
    description:
      "Upskill your career: Master in-demand skills like DBMS, Programming, Power BI, SysAdmin & Networking...",
    image: training,
  },
  {
    id: 5,
    title: "Consulting (Information Systems Audit)",
    description:
      "Secure your data and ensure compliance. Our expert ISA consultants identify vulnerabilities and guide you towards a robust IT infrastructure...",
    image: consult,
  },
];

const choose = [
  {
    id: 1,
    image: "/home.png",
    label: "High Quality Hardware",
  },
  {
    id: 2,
    image: "/chat.png",
    label: "Dedicated 24/7 Support",
  },
  {
    id: 3,
    image: "/mail.png",
    label: "30 Day money-back Guarantee",
  },
  {
    id: 4,
    image: "/photo.png",
    label: "Agile and Fast Working Style",
  },
  {
    id: 5,
    image: "/transcript.png",
    label: "Some Apps are Free",
  },
  {
    id: 6,
    image: "/voice.png",
    label: "High Level of Usability",
  },
];

const work = [
  {
    id: 1,
    image: "/web1.png",
    label: "Nike Air Commerce",
    date: "22 Dec 2021",
  },
  {
    id: 2,
    image: "/web2.png",
    label: "Eligant Nail Retail",
    date: "22 Dec 2021",
  },
  {
    id: 3,
    image: "/web3.png",
    label: "Data Onboarding Platform",
    date: "22 Dec 2021",
  },
  {
    id: 4,
    image: "/web4.png",
    label: "Smart Bouquest Delivery",
    date: "22 Dec 2021",
  },
  {
    id: 5,
    image: "/web5.png",
    label: "Work faster with Aimm",
    date: "22 Dec 2021",
  },
  {
    id: 6,
    image: "/web6.png",
    label: "Creative for Everyone",
    date: "22 Dec 2021",
  },
];

export { service, choose, work };

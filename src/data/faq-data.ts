interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "Can I upgrade or expand my website later?",
    answer:
      "Yes. All websites are built to scale, so you can start simple and expand as your business grows.",
  },
  {
    id: 2,
    question: "Can you work with my existing website?",
    answer:
      "Yes. We can manage, improve, or rebuild your existing website depending on what you already have.",
  },
  {
    id: 3,
    question: "Do I need everything figured out before starting?",
    answer:
      "No. We help guide structure, content, and direction throughout the process.",
  },
  {
    id: 4,
    question: "What’s included with hosting and ongoing care?",
    answer:
      "Hosting includes security, updates, performance monitoring, backups, analytics, and a monthly report.",
  },
  {
    id: 5,
    question: "Why handle both the website and the media?",
    answer:
      "Because original photos and videos make a business feel real, credible, and far more effective than stock content.",
  },
];

export default faq_data;

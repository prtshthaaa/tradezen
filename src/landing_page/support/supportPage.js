import React, { useState } from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";


function SupportPage() {
  const [query, setQuery] = useState("");

const faqs = [
  {
    question: "how to open account",
    answer: "Go to Signup page and create your TradeZen account.",
  },
  {
    question: "how to add funds",
    answer: "Go to Dashboard → Wallet → Add Funds.",
  },
  {
    question: "forgot password",
    answer: "Use the reset password option on login page.",
  },
  {
    question: "how to buy stocks",
    answer: "Open dashboard and click on Buy option.",
  },
  {
    question: "how to contact support",
    answer: "Mail us at support@tradezen.com",
  },
];

const filteredFaqs = faqs.filter((faq) =>
  faq.question.toLowerCase().includes(query.toLowerCase())
);
  return (
    <div>
      <Hero />
      <CreateTicket />
    </div>
  );
}

export default SupportPage;
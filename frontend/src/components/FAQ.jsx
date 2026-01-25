import { useState } from "react";

const faqData = [
  {
    question: "How does Skyninja work?",
    answer:
      "Skyninja is a travel search engine that compares prices from hundreds of airlines and travel agents to find you the best deal on flights, hotels and car hire.",
  },
  {
    question: "How can I find the cheapest flight using Skyninja?",
    answer:
      "Use our 'Whole month' or 'Cheapest month' search options to find the lowest prices. You can also set up Price Alerts to get notified when prices change.",
  },
  {
    question: "Where should I book a flight to right now?",
    answer:
      "Check out our Explore feature to discover destinations based on your budget and travel dates.",
  },
  {
    question: "Do I book my flight with Skyninja?",
    answer:
      "Skyninja is a search engine, so when you've found your flight, we'll transfer you directly to the airline or travel agent.",
  },
  {
    question: "What happens after I have booked my flight?",
    answer:
      "Once booked, you'll receive confirmation directly from the airline or travel agent.",
  },
  {
    question: "Does Skyninja do hotels too?",
    answer:
      "Yes! Skyninja compares millions of hotels worldwide.",
  },
  {
    question: "What about car hire?",
    answer:
      "We compare car hire deals from leading rental companies worldwide.",
  },
  {
    question: "What's a Price Alert?",
    answer:
      "Price Alerts notify you when flight prices change.",
  },
  {
    question: "Can I book a flexible flight ticket?",
    answer:
      "Many airlines offer flexible tickets that allow date changes.",
  },
  {
    question: "Can I book flights that emit less CO₂?",
    answer:
      "Yes! We show CO₂ emissions so you can choose greener flights.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumn = faqData.filter((_, i) => i % 2 === 0);
  const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

  const FAQItem = ({ item, index }) => {
    const isOpen = openIndex === index;

    return (
      <div className="faq-item" onClick={() => toggleFAQ(index)}>
        <div className="faq-question">
          <span>{item.question}</span>
          <span className={`faq-arrow ${isOpen ? "open" : ""}`}>
            ▼
          </span>
        </div>

        {isOpen && <div className="faq-answer">{item.answer}</div>}
      </div>
    );
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Booking flights with Skyninja</h2>

      <div className="faq-grid">
        <div className="faq-column">
          {leftColumn.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={faqData.indexOf(item)}
            />
          ))}
        </div>

        <div className="faq-column">
          {rightColumn.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={faqData.indexOf(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

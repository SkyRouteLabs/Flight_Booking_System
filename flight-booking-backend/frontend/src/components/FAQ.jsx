import { useState } from 'react';

const faqData = [
    {
        question: "How does Skyscanner work?",
        answer: "Skyscanner is a travel search engine that compares prices from hundreds of airlines and travel agents to find you the best deal on flights, hotels and car hire."
    },
    {
        question: "How can I find the cheapest flight using Skyscanner?",
        answer: "Use our 'Whole month' or 'Cheapest month' search options to find the lowest prices. You can also set up Price Alerts to get notified when prices change."
    },
    {
        question: "Where should I book a flight to right now?",
        answer: "Check out our Explore feature to discover destinations based on your budget and travel dates. We'll show you the cheapest places to fly from your location."
    },
    {
        question: "Do I book my flight with Skyscanner?",
        answer: "Skyscanner is a search engine, so when you've found your flight, we'll transfer you directly to the airline or travel agent to complete your booking."
    },
    {
        question: "What happens after I have booked my flight?",
        answer: "Once you've booked, you'll receive confirmation directly from the airline or travel agent. You can manage your booking through their website or app."
    },
    {
        question: "Does Skyscanner do hotels too?",
        answer: "Yes! Skyscanner compares millions of hotels worldwide so you can find and book the perfect accommodation for your trip."
    },
    {
        question: "What about car hire?",
        answer: "We compare car hire deals from leading rental companies worldwide, helping you find the best prices for your road trip."
    },
    {
        question: "What's a Price Alert?",
        answer: "Price Alerts notify you when the price of a flight changes. Set one up and we'll email you when prices go up or down."
    },
    {
        question: "Can I book a flexible flight ticket?",
        answer: "Many airlines offer flexible tickets that allow you to change your travel dates. Look for the 'Flexible ticket' filter in your search results."
    },
    {
        question: "Can I book flights that emit less CO₂?",
        answer: "Yes! We show CO₂ emissions for flights so you can make more environmentally conscious travel choices. Look for the 'Greener choices' label."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split FAQ into two columns
    const leftColumn = faqData.filter((_, i) => i % 2 === 0);
    const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

    const FAQItem = ({ item, index }) => {
        const actualIndex = faqData.indexOf(item);
        const isOpen = openIndex === actualIndex;

        return (
            <div className="faq-item" onClick={() => toggleFAQ(actualIndex)}>
                <div className="faq-question">
                    <span>{item.question}</span>
                    <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </span>
                </div>
                {isOpen && (
                    <div className="faq-answer">
                        {item.answer}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section className="faq-section">
            <h2 className="faq-title">Booking flights with Skyscanner</h2>
            <div className="faq-grid">
                <div className="faq-column">
                    {leftColumn.map((item, i) => (
                        <FAQItem key={i} item={item} index={i * 2} />
                    ))}
                </div>
                <div className="faq-column">
                    {rightColumn.map((item, i) => (
                        <FAQItem key={i} item={item} index={i * 2 + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

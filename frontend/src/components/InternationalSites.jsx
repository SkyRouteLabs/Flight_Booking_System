import { useState } from 'react';

export default function InternationalSites() {
    const [isOpen, setIsOpen] = useState(false);

    const sites = [
        "United States", "United Kingdom", "Australia", "Canada", "Germany",
        "France", "Spain", "Italy", "Netherlands", "Brazil", "Japan", "India"
    ];

    return (
        <section className="international-section">
            <div className="international-header" onClick={() => setIsOpen(!isOpen)}>
                <span>Our international sites</span>
                <span className={`international-arrow ${isOpen ? 'open' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div className="international-content">
                    {sites.map((site, index) => (
                        <a key={index} href="#" className="international-link">{site}</a>
                    ))}
                </div>
            )}
        </section>
    );
}

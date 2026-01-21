import { useState } from 'react';

const tabs = ['Country', 'City', 'Region', 'Airport'];

const destinationsData = {
    Country: [
        {
            col1: ["Best car hire in China", "Saudi Arabia car hire", "Cheap car hire in Thailand"],
            col2: ["Car hire in Oman", "Cheap car hire in Japan", "Best car hire in Singapore"],
            col3: ["Car hire in United Arab Emirates", "Cheap car hire in India", "Sri Lanka car hire"]
        }
    ],
    City: [
        {
            col1: ["Dubai car hire", "Bangkok car hire", "Singapore car hire"],
            col2: ["Tokyo car hire", "Mumbai car hire", "Shanghai car hire"],
            col3: ["Delhi car hire", "Hong Kong car hire", "Seoul car hire"]
        }
    ],
    Region: [
        {
            col1: ["Southeast Asia car hire", "Middle East car hire", "South Asia car hire"],
            col2: ["East Asia car hire", "Central Asia car hire", "Pacific Islands car hire"],
            col3: ["Caribbean car hire", "Mediterranean car hire", "Scandinavia car hire"]
        }
    ],
    Airport: [
        {
            col1: ["Dubai Airport car hire", "Singapore Changi car hire", "Bangkok Suvarnabhumi car hire"],
            col2: ["Tokyo Haneda car hire", "Mumbai Airport car hire", "Delhi Airport car hire"],
            col3: ["Hong Kong Airport car hire", "Seoul Incheon car hire", "Shanghai Pudong car hire"]
        }
    ]
};

export default function PlanningAdventure() {
    const [activeTab, setActiveTab] = useState('Country');

    const currentData = destinationsData[activeTab][0];

    return (
        <section className="planning-section">
            <h2 className="planning-title">Start planning your adventure</h2>

            <div className="planning-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`planning-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="planning-content">
                <button className="planning-nav planning-nav-left">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                </button>

                <div className="planning-grid">
                    <div className="planning-column">
                        {currentData.col1.map((item, i) => (
                            <a key={i} href="#" className="planning-link">{item}</a>
                        ))}
                    </div>
                    <div className="planning-column">
                        {currentData.col2.map((item, i) => (
                            <a key={i} href="#" className="planning-link">{item}</a>
                        ))}
                    </div>
                    <div className="planning-column">
                        {currentData.col3.map((item, i) => (
                            <a key={i} href="#" className="planning-link">{item}</a>
                        ))}
                    </div>
                </div>

                <button className="planning-nav planning-nav-right">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    );
}

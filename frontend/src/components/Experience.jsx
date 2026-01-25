import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

import economyImg from "../assets/experience_economy.png";
import businessImg from "../assets/experience_business.png";
// Fallback or reused image since first class generation failed, user can ask to regenerate later
import firstClassImg from "../assets/experience_first_class.png";

export default function Experience() {
    return (
        <div className="app-container">
            <Header customHero={
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            <em>Fly in</em><br />
                            <em>Style</em>
                        </h1>
                    </div>
                </div>
            } />

            <main className="main-content">
                <section className="content-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>

                    {/* Economy Plus */}
                    <div className="experience-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px', flexWrap: 'wrap' }}>
                        <div className="text-content" style={{ flex: 1, minWidth: '300px' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>Economy Plus</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                                Experience generous legroom and superior comfort in our Economy Plus cabin.
                                Enjoy a curated selection of meals, complimentary beverages, and on-demand entertainment
                                at your fingertips. Travel doesn't have to be exhausting – relax and arrive refreshed.
                            </p>
                        </div>
                        <div className="image-content" style={{ flex: 1, minWidth: '300px' }}>
                            <img src={economyImg} alt="Economy Plus Cabin" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
                        </div>
                    </div>

                    {/* Business Class */}
                    <div className="experience-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px', flexWrap: 'wrap-reverse', flexDirection: 'row-reverse' }}>
                        <div className="text-content" style={{ flex: 1, minWidth: '300px' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>Business Class</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                                Redefine productivity and relaxation. Our Business Class offers fully lie-flat seats,
                                direct aisle access, and a dedicated workspace. Indulge in gourmet dining paired with
                                fine wines, and enjoy priority check-in and lounge access for a seamless journey.
                            </p>
                        </div>
                        <div className="image-content" style={{ flex: 1, minWidth: '300px' }}>
                            <img src={businessImg} alt="Business Class Seat" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
                        </div>
                    </div>

                    {/* First Class */}
                    <div className="experience-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px', flexWrap: 'wrap' }}>
                        <div className="text-content" style={{ flex: 1, minWidth: '300px' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>First Class</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                                The ultimate in privacy and luxury. Retreat to your own private suite with sliding doors.
                                Savor à la carte dining whenever you wish, sleep on a plush mattress, and experience
                                service that anticipates your every need. It's more than a flight; it's a 5-star hotel in the sky.
                            </p>
                        </div>
                        <div className="image-content" style={{ flex: 1, minWidth: '300px' }}>
                            {/* Using Business img for now as fallback placeholder */}
                            <img src={firstClassImg} alt="First Class Suite" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
}

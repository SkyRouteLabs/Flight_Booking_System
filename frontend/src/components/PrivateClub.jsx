import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

export default function PrivateClub() {
    return (
        <div className="app-container">
            <Header customHero={
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            <em>Private Club</em>
                        </h1>
                    </div>
                </div>
            } />

            <main className="main-content" style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px'
            }}>
                <h2 style={{ fontSize: '1.5rem', color: '#555', marginBottom: '32px' }}>
                    Exclusive Benefits. Coming Soon.
                </h2>
                <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                    We are crafting an exclusive membership experience tailored for our most discerning travelers.
                    Prepare for priority access, luxury lounge benefits, and personalized concierge services.
                </p>
                <button className="btn-filled" style={{ marginTop: '40px' }} disabled>Join Waitlist (Opening Soon)</button>
            </main>

            <Footer />
        </div>
    );
}

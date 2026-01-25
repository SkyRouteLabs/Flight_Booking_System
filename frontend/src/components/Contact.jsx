import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us. We will get back to you shortly!");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="app-container">
            <Header customHero={
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            <em>We're Here</em><br />
                            <em>To Help</em>
                        </h1>
                    </div>
                </div>
            } />

            <main className="main-content">
                <section className="content-section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Get in Touch</h2>
                            <p style={{ marginBottom: '30px', color: '#555', lineHeight: '1.6' }}>
                                Have a question about your booking or need assistance planning your trip?
                                Our team is available 24/7 to assist you.
                            </p>

                            <div className="info-item" style={{ marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Customer Service</h3>
                                <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>+1 (555) 123-4567</p>
                            </div>

                            <div className="info-item" style={{ marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email Support</h3>
                                <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>support@skyninja.com</p>
                            </div>

                            <div className="info-item" style={{ marginTop: '40px' }}>
                                <p>Have a quick question? <a href="#" style={{ color: 'var(--primary-color)' }}>Check our FAQs</a></p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name</label>
                                    <input
                                        type="text"
                                        required
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
                                    <input
                                        type="email"
                                        required
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Subject</label>
                                    <select
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Booking Support</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-filled" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

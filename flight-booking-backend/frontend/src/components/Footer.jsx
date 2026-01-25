export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    {/* Region Selector */}
                    <div className="footer-region">
                        <button className="region-selector">
                            <span>India</span>
                            <span>English (UK)</span>
                            <span>₹ INR</span>
                        </button>
                    </div>

                    {/* Footer Links */}
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Help</h4>
                            <a href="#">Privacy Settings</a>
                            <a href="#">Log in</a>
                        </div>

                        <div className="footer-column">
                            <a href="#">Cookie policy</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms of service</a>
                            <a href="#">Company Details</a>
                        </div>

                        <div className="footer-column footer-dropdowns">
                            <div className="footer-dropdown">
                                <span>Explore</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </div>
                            <div className="footer-dropdown">
                                <span>Company</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </div>
                            <div className="footer-dropdown">
                                <span>Partners</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </div>
                            <div className="footer-dropdown">
                                <span>Trips</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </div>
                            <div className="footer-dropdown">
                                <span>International Sites</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

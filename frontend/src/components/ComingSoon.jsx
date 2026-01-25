import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

export default function ComingSoon() {
    return (
        <>
            <Header />
            <div style={{
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px"
            }}>
                <h1 style={{
                    color: "var(--primary-dark)",
                    fontSize: "48px",
                    marginBottom: "20px"
                }}>
                    Coming Soon
                </h1>
                <p style={{
                    color: "var(--text-secondary)",
                    fontSize: "18px",
                    maxWidth: "600px"
                }}>
                    We are working hard to bring you this feature. Please check back later!
                </p>
            </div>
            <Footer />
        </>
    );
}

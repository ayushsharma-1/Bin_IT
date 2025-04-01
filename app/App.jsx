import React, {useState, useEffect} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from "../src/jsx/AboutPage/about.jsx";
import Faqs from '../src/jsx/CommunityPages/faqs';
import News from '../src/jsx/NewsPage/news';
import Home from '../src/jsx/HomePage/home';
import ReportPage from '../src/jsx/ReportPage/report.jsx';
import Ngo from '../src/jsx/RegistrationPages/ngo.jsx';
import ChatbitEmbed from '../src/jsx/chatbot.jsx';
import { Analytics } from "@vercel/analytics/react"

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );
};

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change 2000ms to document.readyState check if needed

    return () => clearTimeout(timer);
  }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                <ChatbitEmbed />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/submit-report" element={<ReportPage totalPages={4} />} />
                    <Route path="/ngo-registration" element={<Ngo />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Analytics />
                </>
            )}
        </>
    );
}
export default App;

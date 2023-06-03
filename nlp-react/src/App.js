import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashBoard from './pages/Dashboard';
import Features from './pages/Features';
import SvgIcons from './components/SvgIcons';
import BenefitsPage from './pages/BenefitsPage';
import PricingPage from './pages/PricingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactForm from './pages/ContactForm';
import WaitlistPage from './pages/WaitlistPage';
import PrivacyPlicyPage from './pages/PrivacyPlicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <Router>
      <SvgIcons/>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />        
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/privacy" element={<PrivacyPlicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;

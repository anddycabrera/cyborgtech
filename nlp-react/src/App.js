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
import MainContent from './components/MainContent';
import QuestionAnswer from './components/QuestionAnswer';
import TranslationSummarization from './components/TranslationSummarization';
import TextGeneration from './components/TextGeneration';
import ConversationalAI from './components/ConversationalAI';

function App() {
  return (
    <Router>
      <SvgIcons/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<DashBoard />}>
          <Route index element={<MainContent />} />
          <Route path="text-analysis" element={<MainContent />} />  
          <Route path="question-answering" element={<QuestionAnswer />} />    
          <Route path="translation-summarization" element={<TranslationSummarization />} />   
          <Route path="text-generation" element={<TextGeneration />} />   
          <Route path="conversational-ai" element={<ConversationalAI />} />          
        </Route>        
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

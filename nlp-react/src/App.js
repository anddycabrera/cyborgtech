import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/analysis">Analysis</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/analysis" element={<AnalysisPage/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

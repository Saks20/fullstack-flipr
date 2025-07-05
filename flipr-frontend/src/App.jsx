import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurProjects from './components/OurProjects';
import HappyClients from './components/HappyClients';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
import AdminPanel from './pages/AdminPanel';

const LandingPage = () => (
  <>
    <OurProjects />
    <HappyClients />
    <ContactForm />
    <Newsletter />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

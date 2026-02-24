import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PaperGeneration from './PaperGeneration';
import StudentManagement from './StudentManagement';
import AttendanceManagement from './AttendanceManagement';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Team from './Team';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
import TermsAndConditions from './TermsAndConditions';
import SLA from './SLA';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/paper-generation' element={<PaperGeneration />} />
        <Route path='/student-management' element={<StudentManagement />} />
        <Route
          path='/attendance-management'
          element={<AttendanceManagement />}
        />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/refund' element={<RefundPolicy />} />
        <Route path='/terms' element={<TermsAndConditions />} />
        <Route path='/sla' element={<SLA />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

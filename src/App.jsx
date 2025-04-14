import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import './styles/animations.css';
import About from './pages/About';
import Departments from './pages/Departments';
import HealthPackages from './pages/HealthPackages';
import Insurance from './pages/Insurance';
import Contact from './pages/Contact';
import Home from './pages/Home';

// Department Pages
import Cardiology from './pages/departments/Cardiology';
import Orthopaedics from './pages/departments/Orthopaedics';
import Neurology from './pages/departments/Neurology';
import Paediatrics from './pages/departments/Paediatrics';
import Gynaecology from './pages/departments/Gynaecology';
import GeneralMedicine from './pages/departments/GeneralMedicine';
import Emergency from './pages/departments/Emergency';

// Facility Pages
import IcuOt from './pages/facilities/IcuOt';
import AmbulancePharmacy from './pages/facilities/AmbulancePharmacy';
import Diagnostics from './pages/facilities/Diagnostics';
import Wards from './pages/facilities/Wards';
import InsuranceSupport from './pages/facilities/InsuranceSupport';
import Infrastructure from './pages/facilities/Infrastructure';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main >
        {/* <main className="flex-grow pt-16"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/packages" element={<HealthPackages />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/contact" element={<Contact />} />

            {/* Department Routes */}
            <Route path="/departments/cardiology" element={<Cardiology />} />
            <Route path="/departments/orthopaedics" element={<Orthopaedics />} />
            <Route path="/departments/neurology" element={<Neurology />} />
            <Route path="/departments/paediatrics" element={<Paediatrics />} />
            <Route path="/departments/gynaecology" element={<Gynaecology />} />
            <Route path="/departments/general-medicine" element={<GeneralMedicine />} />
            <Route path="/departments/emergency" element={<Emergency />} />

            {/* Facility Routes */}
            <Route path="/facilities/icu-ot" element={<IcuOt />} />
            <Route path="/facilities/ambulance-pharmacy" element={<AmbulancePharmacy />} />
            <Route path="/facilities/diagnostics" element={<Diagnostics />} />
            <Route path="/facilities/wards" element={<Wards />} />
            <Route path="/facilities/insurance" element={<InsuranceSupport />} />
            <Route path="/facilities/infrastructure" element={<Infrastructure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import React, { useState } from 'react';
import Navigation from './compoents/Navigation';
import HomePage from './compoents/HomePage';
import AboutSection from './compoents/AboutSection';
import VolunteerForm from './compoents/VolunteerForm';
import Footer from './compoents/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && <HomePage setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'volunteer' && <VolunteerForm />}
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;
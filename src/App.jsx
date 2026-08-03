import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Box>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
    </Box>
  );
}

export default App;

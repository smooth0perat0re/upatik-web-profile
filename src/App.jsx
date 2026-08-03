import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { Box, Typography, Button } from '@mui/material';

function App() {
  return (
    <Box>
      <Navbar />
      
      {/* Home / Hero Section */}
      <Section id="home" isDark={true}>
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
            <span style={{ color: '#E53935' }}>UPA-TIK</span> POLIBATAM
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Layanan Teknologi Informasi Komunikasi Profesional
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
            Jelajahi Layanan
          </Button>
        </Box>
      </Section>

      <Section id="about" title="Tentang Kami" isDark={false}>
        <Typography variant="body1" align="center" color="text.secondary">
          Deskripsi tentang UPA-TIK Polibatam akan dimuat di sini.
        </Typography>
      </Section>

      <Section id="services" title="Layanan" isDark={true}>
        <Typography variant="body1" align="center" color="text.secondary">
          Daftar layanan IT yang diberikan oleh UPA-TIK.
        </Typography>
      </Section>

      <Section id="team" title="Tim Kami" isDark={false}>
        <Typography variant="body1" align="center" color="text.secondary">
          Profil anggota tim UPA-TIK.
        </Typography>
      </Section>

      <Section id="contact" title="Kontak" isDark={true}>
        <Typography variant="body1" align="center" color="text.secondary">
          Informasi kontak dan hubungi kami.
        </Typography>
      </Section>
    </Box>
  );
}

export default App;

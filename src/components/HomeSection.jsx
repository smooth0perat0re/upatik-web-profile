import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import Section from './Section';

export default function HomeSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="home" isDark={true}>
      <Fade in={mounted} timeout={1000}>
        <Box sx={{ textAlign: 'center', mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Box 
            component="img" 
            src="/Polibatam Univ Logo.png" 
            alt="Polibatam Logo" 
            sx={{ height: 120, mb: 4 }}
          />

          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
            Selamat datang di UPA - TIK
          </Typography>
          
          <Typography variant="h5" color="text.primary" paragraph sx={{ mb: 4 }}>
            Memberikan yang terbaik secara profesional dan berintegritas.
          </Typography>
          
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
            Unit Penunjang Akademik Teknologi, Informasi dan Komunikasi yang disingkat UPA-TIK Politeknik Negeri Batam merupakan salah satu unit yang mengemban tugas sebagai pelaksana teknis yang berhubungan langsung dengan sistem informasi berbasis Teknologi Informasi dan Komunikasi (TIK).
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="outlined" color="primary" size="large">
              Jelajahi Layanan
            </Button>
            <Button variant="contained" color="primary" size="large">
              Laporkan Aduan : Helpdesk
            </Button>
          </Box>

        </Box>
      </Fade>
    </Section>
  );
}

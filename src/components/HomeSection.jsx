import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Section from './Section';

export default function HomeSection() {
  return (
    <Section id="home" isDark={true}>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
          Selamat datang di UPA - TIK
        </Typography>
        <Typography variant="h5" color="text.primary" paragraph sx={{ mb: 4 }}>
          Memberikan yang terbaik secara profesional dan berintegritas.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
          Unit Penunjang Akademik Teknologi, Informasi dan Komunikasi yang disingkat UPA-TIK Politeknik Negeri Batam merupakan salah satu unit yang mengemban tugas sebagai pelaksana teknis yang berhubungan langsung dengan sistem informasi berbasis Teknologi Informasi dan Komunikasi (TIK).
        </Typography>
        <Button variant="outlined" color="primary" size="large" sx={{ mr: 2 }}>
          Jelajahi Layanan
        </Button>
        <Button variant="contained" color="primary" size="large">
          Laporkan Aduan : Helpdesk
        </Button>
      </Box>
    </Section>
  );
}

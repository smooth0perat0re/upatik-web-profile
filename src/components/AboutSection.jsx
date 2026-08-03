import React from 'react';
import { Typography, Box } from '@mui/material';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

export default function AboutSection() {
  const { mode } = useThemeContext();

  return (
    <Section id="about" title="Profile UPATIK" isDark={mode === 'dark'}>
      <Typography variant="body1" color="text.primary" paragraph>
        UPATIK adalah salah satu unit pada Polibatam yang bertanggung jawab atas pengelolaan dan pengembangan teknologi informasi dan komunikasi (TIK) di lingkungan kampus. UPATIK menyediakan berbagai layanan dan fasilitas untuk mendukung kegiatan akademik, administrasi, dan penelitian.
      </Typography>
      
      <Typography variant="h6" color="primary.main" sx={{ mt: 4, mb: 2 }}>
        Fungsi dan Tugas UPATIK:
      </Typography>
      
      <Box component="ul" sx={{ color: 'text.secondary', pl: 3, '& li': { mb: 2 } }}>
        <li>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>Pengembangan dan pengelolaan sistem informasi:</Typography>
          UPATIK bertanggung jawab atas pengembangan, pengelolaan, dan pemeliharaan sistem informasi yang digunakan di perguruan tinggi, seperti sistem informasi akademik, sistem informasi keuangan, dan lain-lain.
        </li>
        <li>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>Pengelolaan infrastruktur TIK:</Typography>
          UPATIK menyediakan dan mengelola infrastruktur TIK seperti jaringan komputer, internet, server, dan perangkat keras lainnya untuk mendukung operasional perguruan tinggi.
        </li>
        <li>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>Penyediaan layanan TIK:</Typography>
          UPATIK menyediakan berbagai layanan TIK kepada civitas akademika, seperti akses internet, email, aplikasi perkuliahan online, dan layanan lainnya.
        </li>
        <li>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>Peningkatan keamanan data:</Typography>
          UPATIK bertanggung jawab untuk menjaga keamanan data dan informasi yang tersimpan dalam sistem informasi perguruan tinggi.
        </li>
        <li>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>Peningkatan literasi TIK:</Typography>
          UPATIK juga berperan dalam meningkatkan literasi TIK sivitas akademika melalui pelatihan dan kegiatan edukasi lainnya.
        </li>
      </Box>
    </Section>
  );
}

import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

import logoBlu from '../assets/Logo Pendukung/Logo BLU.png';
import logoCdio from '../assets/Logo Pendukung/Logo CDIO.png';
import logoCerdas from '../assets/Logo Pendukung/Logo CERDAS BERKARAKTER.png';
import logoDiksi1 from '../assets/Logo Pendukung/Logo DIKTISAINTEK (1).png';
import logoDiksi2 from '../assets/Logo Pendukung/Logo DIKTISAINTEK (2).png';
import logoDiksi3 from '../assets/Logo Pendukung/Logo DIKTISAINTEK (3).png';
import logoIso from '../assets/Logo Pendukung/Logo ISO.png';
import logoZi from '../assets/Logo Pendukung/ZI ok.png';

const logos = [
  logoDiksi1, logoDiksi2, logoDiksi3, logoBlu, logoCdio, logoCerdas, logoIso, logoZi
];

export default function PartnersSection() {
  const { t } = useLanguage();
  const { mode } = useThemeContext();

  return (
    <Box id="partners" sx={{ bgcolor: mode === 'dark' ? '#080808' : '#e0e5ec', py: 6, borderTop: '1px solid', borderColor: 'divider' }}>
      <Typography variant="h6" color="text.secondary" align="center" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 2, mb: 4, fontWeight: 700 }}>
        {t('partners_title')}
      </Typography>
      
      {/* Marquee Container */}
      <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
        <Box 
          sx={{ 
            display: 'inline-flex',
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }}
        >
          {/* Double the logos to make continuous scroll smooth */}
          {[...logos, ...logos].map((logo, idx) => (
            <Box 
              key={idx}
              component="img"
              src={logo}
              alt={`Partner ${idx}`}
              sx={{ 
                height: 60, 
                mx: 4, 
                objectFit: 'contain',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

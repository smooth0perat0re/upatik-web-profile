import React from 'react';
import { Box } from '@mui/material';
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
  const { mode } = useThemeContext();

  return (
    <Box id="partners" sx={{ bgcolor: mode === 'dark' ? '#080808' : '#e0e5ec', py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      
      {/* Marquee Container */}
      <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box 
          sx={{ 
            display: 'inline-flex',
            animation: 'scroll 40s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }}
        >
          {/* 4x loop ensures the screen is fully filled even on ultrawide monitors and scrolls seamlessly */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
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
                flexShrink: 0,
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

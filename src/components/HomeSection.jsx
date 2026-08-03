import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

import logoPutih from '../assets/PNG-POLIBATAM/Polibatam Univ Logo (2) Putih.png';
import logoHitam from '../assets/PNG-POLIBATAM/Polibatam Univ Logo (2) Hitam.png';

export default function HomeSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const { mode } = useThemeContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="home" isDark={mode === 'dark'}>
      <Fade in={mounted} timeout={1000}>
        <Box sx={{ textAlign: 'center', mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Box 
            component="img" 
            src={mode === 'dark' ? logoPutih : logoHitam} 
            alt="Polibatam Logo" 
            sx={{ height: 120, mb: 4 }}
          />

          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
            {t('home_title')}
          </Typography>
          
          <Typography variant="h5" color="text.primary" paragraph sx={{ mb: 4 }}>
            {t('home_subtitle')}
          </Typography>
          
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
            {t('home_desc')}
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="outlined" color="primary" size="large">
              {t('home_btn_services')}
            </Button>
            <Button variant="contained" color="primary" size="large">
              {t('home_btn_helpdesk')}
            </Button>
          </Box>

        </Box>
      </Fade>
    </Section>
  );
}

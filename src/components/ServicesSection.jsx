import React from 'react';
import { Grid, Box, Typography, CardActionArea, Link } from '@mui/material';
import Section from './Section';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

const services = [
  { name: "e-Learning Elektro & Mesin", url: "https://learning.polibatam.ac.id/" },
  { name: "e-Learning P4M", url: "https://pm.polibatam.ac.id/tutorial-learning-polibatam/" },
  { name: "ICAE Polibatam", url: "https://icae.polibatam.ac.id/" },
  { name: "ICAESS Polibatam", url: "https://icaess.polibatam.ac.id/" },
  { name: "Intranet", url: "https://intranet.polibatam.ac.id/" },
  { name: "Jurnal Polibatam", url: "https://jurnal.polibatam.ac.id/" },
  { name: "PBL Polibatam", url: "https://pbl.polibatam.ac.id/" },
  { name: "Perpustakaan", url: "https://lib.polibatam.ac.id/" },
  { name: "Polibatam", url: "https://www.polibatam.ac.id/" },
  { name: "PM Penjaminan Mutu", url: "https://pm.polibatam.ac.id/" },
  { name: "P2M Polibatam", url: "https://p2m.polibatam.ac.id/" },
  { name: "P3M Polibatam", url: "https://simp3m.polibatam.ac.id/" },
  { name: "P4M Polibatam", url: "https://p4m.polibatam.ac.id/" },
  { name: "PPID Polibatam", url: "https://ppid.polibatam.ac.id/" },
  { name: "Portal & Layanan Kampus", url: "https://linkhub.polibatam.ac.id/" },
  { name: "Registrasi Polibatam", url: "https://registrasi.polibatam.ac.id/" },
  { name: "Repository Polibatam", url: "https://repository.polibatam.ac.id/home" },
  { name: "SID", url: "https://sid.polibatam.ac.id/" },
  { name: "SILAM Polibatam", url: "https://sim.polibatam.ac.id/" },
  { name: "Sistem Informasi Akademik (SIA)", url: "https://sia.polibatam.ac.id/" },
  { name: "Talent Hub", url: "https://talenthub.polibatam.ac.id/" }
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const { mode } = useThemeContext();

  return (
    <Section id="services" title={t('services_title')} isDark={mode === 'dark'}>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ px: { xs: 2, md: 4 } }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="a"
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                width: '100%',
                maxWidth: 340,
                textDecoration: 'none',
                bgcolor: mode === 'dark' ? 'rgba(18, 18, 18, 0.4)' : 'rgba(255, 255, 255, 0.8)', 
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(19, 159, 203, 0.2)',
                borderRadius: 4,
                display: 'flex', 
                flexDirection: 'column',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  bgcolor: mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 1)', 
                  border: '1px solid rgba(19, 159, 203, 1)',
                  boxShadow: '0 10px 25px 0 rgba(19, 159, 203, 0.6), inset 0 0 15px rgba(19, 159, 203, 0.3)',
                  '& .service-icon': {
                    color: mode === 'dark' ? '#fff' : 'primary.main',
                    transform: 'scale(1.2)'
                  },
                  '& .service-title': {
                    color: 'primary.main'
                  }
                }
              }}
            >
              <CardActionArea sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <Box sx={{ 
                  bgcolor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(19, 159, 203, 0.1)', 
                  p: 2, 
                  borderRadius: '50%',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <LanguageIcon className="service-icon" sx={{ fontSize: 40, transition: 'all 0.4s ease', color: mode === 'dark' ? '#fff' : 'primary.main' }} />
                </Box>
                <Typography className="service-title" variant="h6" sx={{ color: mode === 'dark' ? '#fff' : 'primary.main', fontWeight: 700, mb: 1, transition: 'all 0.4s ease', lineHeight: 1.3 }}>
                  {service.name}
                </Typography>
                <Typography variant="body2" sx={{ color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary' }}>
                  {t('services_desc')}
                </Typography>
              </CardActionArea>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

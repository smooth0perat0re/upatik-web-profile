import React from 'react';
import { Grid, Box, Typography, CardActionArea } from '@mui/material';
import Section from './Section';
import LanguageIcon from '@mui/icons-material/Language';

const services = [
  "e-Learning Elektro & Mesin", "e-Learning P4M", "ICAE Polibatam", 
  "ICAESS Polibatam", "Intranet", "Jurnal Polibatam", "PBL Polibatam", 
  "Perpustakaan", "Polibatam", "PM Penjaminan Mutu", "P2M Polibatam", 
  "P3M Polibatam", "P4M Polibatam", "PPID Polibatam", "Portal & Layanan Kampus", 
  "Registrasi Polibatam", "Repository Polibatam", "SID", "SILAM Polibatam", 
  "Sistem Informasi Akademik (SIA)", "Talent Hub"
];

export default function ServicesSection() {
  return (
    <Section id="services" title="Faslink & Layanan" isDark={true}>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ px: { xs: 2, md: 4 } }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              sx={{ 
                width: '100%',
                maxWidth: 340,
                bgcolor: 'rgba(18, 18, 18, 0.4)', 
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
                  bgcolor: 'rgba(18, 18, 18, 0.8)', 
                  border: '1px solid rgba(19, 159, 203, 1)',
                  boxShadow: '0 10px 25px 0 rgba(19, 159, 203, 0.6), inset 0 0 15px rgba(19, 159, 203, 0.3)',
                  '& .service-icon': {
                    color: '#fff',
                    transform: 'scale(1.2)'
                  },
                  '& .service-title': {
                    color: 'primary.light'
                  }
                }
              }}
            >
              <CardActionArea sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <Box sx={{ 
                  bgcolor: 'rgba(19, 159, 203, 0.1)', 
                  p: 2, 
                  borderRadius: '50%',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <LanguageIcon className="service-icon" color="primary" sx={{ fontSize: 40, transition: 'all 0.4s ease' }} />
                </Box>
                <Typography className="service-title" variant="h6" color="text.primary" sx={{ fontWeight: 700, mb: 1, transition: 'all 0.4s ease', lineHeight: 1.3 }}>
                  {service}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Akses layanan internal untuk aktivitas akademik.
                </Typography>
              </CardActionArea>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

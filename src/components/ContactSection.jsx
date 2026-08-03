import React from 'react';
import { Box, Typography, Grid, Container, Link } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

import logoPutih from '../assets/PNG-POLIBATAM/Polibatam Univ Logo (2) Putih.png';
import logoHitam from '../assets/PNG-POLIBATAM/Polibatam Univ Logo (2) Hitam.png';

export default function ContactSection() {
  const { t } = useLanguage();
  const { mode } = useThemeContext();
  
  return (
    <Box id="contact" sx={{ width: '100%', bgcolor: mode === 'dark' ? '#0a0a0a' : '#eceff4', borderTop: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Column 1: Logo & Desc */}
            <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <Box 
                component="img"
                src={mode === 'dark' ? logoPutih : logoHitam}
                alt="Polibatam Logo"
                sx={{ height: 60, mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary" paragraph>
                {t('contact_desc')}
              </Typography>
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('footer_quicklinks')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Perpustakaan', 'Jurnal', 'Repository', 'Helpdesk', 'Lembaga Sertifikasi Profesi'].map((link) => (
                  <Link 
                    href={link === 'Helpdesk' ? "https://helpdesk.polibatam.ac.id/" : "#"} 
                    target={link === 'Helpdesk' ? "_blank" : "_self"}
                    color="text.secondary" 
                    underline="hover" 
                    key={link} 
                    sx={{ fontSize: '0.875rem' }}
                  >
                    &gt; {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Column 3: E-Learning & Akademik */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('footer_elearning')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['e-Learning Elektro & Mesin', 'e-Learning Informatika', 'Sistem Informasi Akademik (SIA)', 'Pendaftaran'].map((link) => (
                  <Link href="#" color="text.secondary" underline="hover" key={link} sx={{ fontSize: '0.875rem' }}>
                    &gt; {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Column 4: Contact Us */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('footer_contact')}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Jl. Ahmad Yani, Batam Centre, Batam, Kepulauan Riau 29461
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> +62-778-469858
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Ext:</strong> 1072
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> upatik@polibatam.ac.id
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Bottom */}
      <Box sx={{ bgcolor: mode === 'dark' ? '#050505' : '#e4e8ec', py: 3, textAlign: 'center', borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          Copyright © 2026 UPA TIK Polibatam - All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

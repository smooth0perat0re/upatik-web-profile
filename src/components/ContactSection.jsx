import React from 'react';
import { Box, Typography, Grid, Container, Link } from '@mui/material';
import Section from './Section';

export default function ContactSection() {
  return (
    <Section id="contact" isDark={true} disablePadding={true}>
      <Box sx={{ pt: 8, pb: 6, bgcolor: '#0a0a0a', borderTop: '1px solid rgba(19, 159, 203, 0.3)' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Column 1: Logo & Desc */}
            <Grid item xs={12} md={3}>
              <Box 
                component="img"
                src="/logo_upatik-removebg-preview.png"
                alt="UPA-TIK Logo"
                sx={{ height: 60, mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary" paragraph>
                Unit Penunjang Akademik Teknologi, Informasi dan Komunikasi (UPA-TIK) Politeknik Negeri Batam.
              </Typography>
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 'bold', mb: 2 }}>
                QUICK LINKS
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Perpustakaan', 'Jurnal', 'Repository', 'Helpdesk', 'Lembaga Sertifikasi Profesi'].map((link) => (
                  <Link href="#" color="text.secondary" underline="hover" key={link} sx={{ fontSize: '0.875rem' }}>
                    &gt; {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Column 3: E-Learning & Akademik */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 'bold', mb: 2 }}>
                E-LEARNING & AKADEMIK
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
                CONTACT US
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
      <Box sx={{ bgcolor: '#050505', py: 3, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Typography variant="body2" color="text.secondary">
          Copyright © 2026 UPA TIK Polibatam - All rights reserved.
        </Typography>
      </Box>
    </Section>
  );
}

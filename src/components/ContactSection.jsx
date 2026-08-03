import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Section from './Section';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ContactSection() {
  return (
    <Section id="contact" title="Kontak Person" isDark={true}>
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <PhoneIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h5" color="text.primary" gutterBottom>
          Hubungi Kami
        </Typography>
        <Typography variant="h4" color="primary.main" sx={{ fontWeight: 'bold', mb: 4 }}>
          +62-778-469858 Ext.1072
        </Typography>
      </Box>

      <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 8, pt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Copyright © 2026 UPA TIK Polibatam - All rights reserved.
        </Typography>
      </Box>
    </Section>
  );
}

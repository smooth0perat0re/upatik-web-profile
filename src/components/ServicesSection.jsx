import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import Section from './Section';
import ComputerIcon from '@mui/icons-material/Computer';

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
      <Grid container spacing={3} alignItems="stretch">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card 
              sx={{ 
                bgcolor: 'background.paper', 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px 0 rgba(19, 159, 203, 0.4)',
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CardActionArea sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <ComputerIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600 }}>
                  {service}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Akses portal layanan {service}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

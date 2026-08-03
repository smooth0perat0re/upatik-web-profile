import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Section from './Section';
import ComputerIcon from '@mui/icons-material/Computer';

// Data layanan dari screenshot (akan diupdate dengan link asli nantinya)
const services = [
  "e-Learning Elektro & Mesin",
  "e-Learning P4M",
  "ICAE Polibatam",
  "ICAESS Polibatam",
  "Intranet",
  "Jurnal Polibatam",
  "PBL Polibatam",
  "Perpustakaan",
  "Polibatam",
  "PM Penjaminan Mutu",
  "P2M Polibatam",
  "P3M Polibatam",
  "P4M Polibatam",
  "PPID Polibatam",
  "Portal & Layanan Kampus",
  "Registrasi Polibatam",
  "Repository Polibatam",
  "SID",
  "SILAM Polibatam",
  "Sistem Informasi Akademik (SIA)",
  "Talent Hub"
];

export default function ServicesSection() {
  return (
    <Section id="services" title="Faslink & Layanan" isDark={true}>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
              <CardActionArea sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <ComputerIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" color="text.primary">
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

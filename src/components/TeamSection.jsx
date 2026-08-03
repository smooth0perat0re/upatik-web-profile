import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import Section from './Section';

const teamDivisions = [
  {
    title: 'Kepala Unit & Jaringan',
    members: [
      { name: 'Ir. Mhd. Fattahilah Rangkuty, S.Tr. Kom., M.Kom', role: 'Kepala UPA TIK / Jaringan' },
      { name: 'Nur Hidayat', role: 'Jaringan' }
    ]
  },
  {
    title: 'Tata Usaha (TU)',
    members: [
      { name: 'Erick Saputra Wisnugraha', role: 'Staff TU' },
      { name: 'Arief Sulisetyo Widodo, S.Kom', role: 'Staff TU' }
    ]
  },
  {
    title: 'Software',
    members: [
      { name: 'Mohammad Ichwan Rizky', role: 'Software Engineer' },
      { name: 'Muhammad Feby Febrian, S.Kom', role: 'Software Engineer' }
    ]
  },
  {
    title: 'Data',
    members: [
      { name: 'Liowna Mauboy, S.Kom', role: 'Data Engineer' },
      { name: 'Arlika Belle', role: 'Data Engineer' }
    ]
  },
  {
    title: 'Helpdesk',
    members: [
      { name: 'Hengky Leonardo, S. Kom', role: 'Helpdesk Support' },
      { name: 'Wendy Sanjaya', role: 'Helpdesk Support' }
    ]
  }
];

export default function TeamSection() {
  return (
    <Section id="team" title="Tim Kami" isDark={false}>
      {teamDivisions.map((division, idx) => (
        <Box key={idx} sx={{ mb: 6 }}>
          <Typography variant="h5" color="primary.main" gutterBottom sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1, mb: 3 }}>
            {division.title}
          </Typography>
          <Grid container spacing={4}>
            {division.members.map((member, mIdx) => (
              <Grid item xs={12} sm={6} md={4} key={mIdx}>
                <Card sx={{ bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, height: '100%' }}>
                  <Avatar 
                    sx={{ width: 100, height: 100, mb: 2, bgcolor: 'secondary.main' }}
                    alt={member.name}
                  />
                  <Typography variant="h6" color="text.primary" align="center" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {member.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Section>
  );
}

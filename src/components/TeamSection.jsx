import React from 'react';
import { Grid, Card, Typography, Avatar, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Section from './Section';

// Gambar Tim
import fatahilahImg from '../assets/team/Fatahilah.jpg';
import nurImg from '../assets/team/Nur.jpg';
import liownaImg from '../assets/team/Liowna.jpg';
import arlikaImg from '../assets/team/Arlika.jpg';
import ichwanImg from '../assets/team/Ichwan.jpg';
import febrianImg from '../assets/team/Brian.jpg';
import hengkyImg from '../assets/team/Hengky.jpg';
import wendyImg from '../assets/team/Wendy.jpg';
import erickImg from '../assets/team/Erick.jpg';
import ariefImg from '../assets/team/Arief.jpg';

const teamDivisions = [
  {
    title: 'Network',
    members: [
      { 
        name: 'Ir. Mhd. Fattahilah Rangkuty, S.Tr. Kom., M.Kom', 
        role: 'Kepala UPA-TIK Polibatam', 
        img: fatahilahImg,
        isHead: true 
      },
      { name: 'Nur Hidayat', role: 'Staff Network', img: nurImg }
    ]
  },
  {
    title: 'Data',
    members: [
      { name: 'Liowna Mauboy, S.Kom', role: 'Data Engineer', img: liownaImg },
      { name: 'Arlika Belle', role: 'Data Engineer', img: arlikaImg }
    ]
  },
  {
    title: 'Software',
    members: [
      { name: 'Mohammad Ichwan Rizky', role: 'Software Engineer', img: ichwanImg },
      { name: 'Muhammad Feby Febrian, S.Kom', role: 'Software Engineer', img: febrianImg }
    ]
  },
  {
    title: 'Helpdesk',
    members: [
      { name: 'Hengky Leonardo, S. Kom', role: 'Helpdesk Support', img: hengkyImg },
      { name: 'Wendy Sanjaya', role: 'Helpdesk Support', img: wendyImg }
    ]
  },
  {
    title: 'Tata Usaha (TU)',
    members: [
      { name: 'Erick Saputra Wisnugraha', role: 'Staff TU', img: erickImg },
      { name: 'Arief Sulisetyo Widodo, S.Kom', role: 'Staff TU', img: ariefImg }
    ]
  }
];

export default function TeamSection() {
  return (
    <Section id="team" title="Tim Kami" isDark={false}>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {teamDivisions.map((division, idx) => (
          <Box key={idx} sx={{ mb: 6 }}>
            <Typography variant="h5" color="primary.main" gutterBottom sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1, mb: 4, fontWeight: 'bold' }}>
              {division.title}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {division.members.map((member, mIdx) => (
                <Grid item xs={12} sm={6} key={mIdx} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card 
                    sx={{ 
                      bgcolor: 'background.paper', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      p: 4, 
                      width: '100%',
                      position: 'relative',
                      overflow: 'visible',
                      ...(member.isHead && {
                        border: '2px solid transparent',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        backgroundImage: `linear-gradient(#121212, #121212), linear-gradient(45deg, #ffd700, #ff8c00)`,
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
                      })
                    }}
                  >
                    {member.isHead && (
                      <Box sx={{ position: 'absolute', top: -20, color: '#ffd700', bgcolor: '#121212', borderRadius: '50%', p: 0.5 }}>
                        <EmojiEventsIcon sx={{ fontSize: 32 }} />
                      </Box>
                    )}
                    <Avatar 
                      src={member.img}
                      sx={{ 
                        width: 120, height: 120, mb: 2, 
                        bgcolor: 'secondary.main',
                        border: member.isHead ? '3px solid #ffd700' : 'none'
                      }}
                      alt={member.name}
                    />
                    <Typography variant="h6" color="text.primary" align="center" gutterBottom sx={{ fontWeight: member.isHead ? 700 : 500 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary.main" align="center" sx={{ fontWeight: 'bold' }}>
                      {member.role}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Section>
  );
}

import React from 'react';
import { Grid, Card, Typography, Box, SvgIcon } from '@mui/material';
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

// SVG Crown Asli
function CrownIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 8L15 13.5L21 7L18 19H6L3 7L9 13.5L12 8ZM4 21H20V23H4V21Z" />
    </SvgIcon>
  );
}

const teamDivisions = [
  {
    title: 'Network',
    members: [
      { 
        name: 'Mhd. Fattahilah Rangkuty', 
        role: 'Kepala UPA-TIK, Network Admin', 
        img: fatahilahImg,
        isHead: true 
      },
      { name: 'Nur Hidayat', role: 'Network Admin', img: nurImg }
    ]
  },
  {
    title: 'Data',
    members: [
      { name: 'Liowna Mauboy', role: 'System Analyst, Data Analyst, DB Admin', img: liownaImg },
      { name: 'Arlika Belle', role: 'System Analyst, Data Analyst, DB Admin', img: arlikaImg }
    ]
  },
  {
    title: 'Software',
    members: [
      { name: 'Mohammad Ichwan Rizky', role: 'Fullstack Dev', img: ichwanImg },
      { name: 'Muhammad Feby Febrian', role: 'Tukang Sihir', img: febrianImg }
    ]
  },
  {
    title: 'Helpdesk',
    members: [
      { name: 'Hengky Leonardo', role: 'Helpdesk Officer', img: hengkyImg },
      { name: 'Wendy Sanjaya', role: 'Helpdesk Master', img: wendyImg }
    ]
  },
  {
    title: 'Tata Usaha (TU)',
    members: [
      { name: 'Erick Saputra Wisnugraha', role: 'Staff TU', img: erickImg },
      { name: 'Arief Sulisetyo Widodo', role: 'Staff TU', img: ariefImg }
    ]
  }
];

export default function TeamSection() {
  return (
    <Section id="team" title="Tim Kami" isDark={false}>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {teamDivisions.map((division, idx) => (
          <Box key={idx} sx={{ mb: 8 }}>
            <Typography variant="h5" color="primary.main" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
              {division.title}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {division.members.map((member, mIdx) => (
                <Grid item xs={12} sm="auto" key={mIdx} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card 
                    sx={{ 
                      width: 280, 
                      height: 400, 
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 3,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        '& .member-photo': {
                          transform: 'scale(1.1)'
                        }
                      },
                      ...(member.isHead && {
                        border: '2px solid transparent',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        backgroundImage: `linear-gradient(#121212, #121212), linear-gradient(45deg, #ffd700, #ff8c00)`,
                        boxShadow: '0 0 25px rgba(255, 215, 0, 0.4)'
                      })
                    }}
                  >
                    {member.isHead && (
                      <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 3 }}>
                        <CrownIcon sx={{ fontSize: 36, color: '#ffd700', filter: 'drop-shadow(0 0 5px rgba(255,215,0,0.8))' }} />
                      </Box>
                    )}
                    
                    <Box 
                      className="member-photo"
                      sx={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: `url(${member.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.5s ease',
                        zIndex: 1
                      }}
                    />

                    {/* Gradient Overlay bottom */}
                    <Box 
                      sx={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0) 100%)',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, textShadow: '0px 2px 4px rgba(0,0,0,0.8)', lineHeight: 1.2, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: member.isHead ? '#ffd700' : 'primary.main', fontWeight: 'bold', textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}>
                        {member.role}
                      </Typography>
                    </Box>
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

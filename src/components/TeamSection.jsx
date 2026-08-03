import React from 'react';
import { Card, Typography, Box, SvgIcon, Divider } from '@mui/material';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

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
    title: 'team_network_title',
    members: [
      { name: 'Mhd. Fattahilah Rangkuty', role: 'role_head', img: fatahilahImg, isHead: true },
      { name: 'Nur Hidayat', role: 'role_netadmin', img: nurImg },
      { name: 'Hengky Leonardo', role: 'role_helpdesk', img: hengkyImg },
      { name: 'Wendy Sanjaya', role: 'role_helpdeskmaster', img: wendyImg }
    ]
  },
  {
    title: 'team_software_title',
    members: [
      { name: 'Mohammad Ichwan Rizky', role: 'role_fsdev', img: ichwanImg },
      { name: 'Muhammad Feby Febrian', role: 'role_magician', img: febrianImg },
      { name: 'Liowna Mauboy', role: 'role_sysadmin', img: liownaImg },
      { name: 'Arlika Belle', role: 'role_sysadmin', img: arlikaImg }
    ]
  },
  {
    title: 'team_tu_title',
    members: [
      { name: 'Erick Saputra Wisnugraha', role: 'role_tu', img: erickImg },
      { name: 'Arief Sulisetyo Widodo', role: 'role_tu', img: ariefImg }
    ]
  }
];

export default function TeamSection() {
  const { t } = useLanguage();
  const { mode } = useThemeContext();

  return (
    <Section id="team" title={t('team_title')} isDark={mode === 'dark'}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {teamDivisions.map((division, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <Divider sx={{ mb: 8, mx: 'auto', width: '80%', borderColor: mode === 'dark' ? 'rgba(19, 159, 203, 0.2)' : 'rgba(19, 159, 203, 0.4)' }} />
            )}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h5" color="primary.main" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
                {t(division.title)}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
                {division.members.map((member, mIdx) => (
                  <Card 
                    key={mIdx}
                    sx={{ 
                      width: 260, 
                      height: 380, 
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
                      <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 800, textShadow: '0px 2px 4px rgba(0,0,0,0.8)', lineHeight: 1.2, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: member.isHead ? '#ffd700' : 'primary.main', fontWeight: 'bold', textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}>
                        {t(member.role)}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Section>
  );
}

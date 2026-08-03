import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeContext } from '../contexts/ThemeContext';

const navItems = [
  { key: 'nav_home', target: 'home' },
  { key: 'nav_about', target: 'about' },
  { key: 'nav_services', target: 'services' },
  { key: 'nav_team', target: 'team' },
  { key: 'nav_contact', target: 'contact' }
];

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: mode === 'dark' ? 'background.paper' : 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component="img"
              sx={{ height: 40, mr: 2 }}
              alt="Logo UPA-TIK"
              src="/logo_upatik-removebg-preview.png"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: mode === 'dark' ? 'primary.main' : '#ffffff',
                textDecoration: 'none',
              }}
            >
              UPA-TIK
            </Typography>
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: mode === 'dark' ? 'secondary.main' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
              }}
            >
              POLIBATAM
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 3 }}>
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button sx={{ color: '#fff', '&:hover': { color: mode === 'dark' ? 'primary.main' : '#e0e0e0' } }}>
                    {t(item.key)}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Toggle Theme & Language */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={toggleLanguage} sx={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold' }}>
                <TranslateIcon sx={{ mr: 0.5 }} fontSize="small" />
                {lang.toUpperCase()}
              </IconButton>
              <IconButton onClick={toggleTheme} sx={{ color: '#fff' }}>
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

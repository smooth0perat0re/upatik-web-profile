import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-scroll';


const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Team', target: 'team' },
  { label: 'Contact', target: 'contact' }
];

export default function Navbar() {
  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component="img"
              sx={{ height: 40, mr: 2 }}
              alt="Logo UPA-TIK"
              src="/logo.png"
              onError={(e) => {
                e.target.style.display = 'none'; // Sembunyikan jika gambar belum ada
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
                color: 'primary.main',
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
                color: 'secondary.main',
                textDecoration: 'none',
              }}
            >
              POLIBATAM
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button sx={{ color: '#fff', '&:hover': { color: 'primary.main' } }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Section({ id, title, children, isDark }) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: isDark ? 'background.default' : 'background.paper',
        py: 10,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 6,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
              '&::after': {
                content: '""',
                display: 'block',
                width: 60,
                height: 4,
                bgcolor: 'primary.main',
                margin: '16px auto 0'
              }
            }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}

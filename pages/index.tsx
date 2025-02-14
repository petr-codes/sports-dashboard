import { Container, Typography } from '@mui/material';
import React  from 'react';

export default function Home() {
  return (
      <Container>
        <Typography variant="h3" align="center" sx={{ mt: 5 }}>
          Welcome! Go to <a href="/results">Results</a>
        </Typography>
      </Container>
  );
}

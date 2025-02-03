import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const artworks = [
  {
    title: 'Artwork 1',
    description: 'A beautiful piece of abstract art.',
    image: '../images/1.JPG',
  },
  {
    title: 'Artwork 2',
    description: 'An intriguing landscape artwork.',
    image: '../images/2.png',
  },
  {
    title: 'Artwork 3',
    description: 'A captivating modern art piece.',
    image: '../images/3.png',
  },
  {
    title: 'Artwork 4',
    description: 'A classic portrait with a twist.',
    image: '../images/4.JPG',
  },
];

function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Art Portfolio
      </Typography>
      <Grid container spacing={4}>
        {artworks.map((art, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={art.image}
                alt={art.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {art.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {art.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
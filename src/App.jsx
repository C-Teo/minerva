import React from 'react';
import {
  Grid2,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';

const images = import.meta.glob('/images/*.{png,jpg,jpeg,svg}', { eager: true });

function App() {
  console.log(Object.keys(images))
  return (
    <Grid2>
      <ResponsiveAppBar></ResponsiveAppBar>
      <ImageList variant="masonry" cols={4} gap={8} sx={{ paddingInline: '5rem' }}>
        {Object.keys(images).map((image, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=248&fit=crop&auto=format`}
              alt={image}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid2>
  );
}

export default App;
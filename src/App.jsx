import React from 'react';
import {
  ImageList,
} from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ImageCard from './components/ImageCard';

const images = import.meta.glob('/images/*.{png,jpg,jpeg,svg}', { eager: true });

function App() {
  console.log(Object.keys(images))
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <ImageList variant="masonry" cols={4} gap={28} sx={{ paddingInline: '5rem', paddingTop: '2rem' }}>
        {Object.keys(images).map((image, index) => (
          ImageCard(image,index)
        ))}
      </ImageList>
    </div>
  );
}

export default App;
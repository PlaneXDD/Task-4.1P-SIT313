// src/components/MainImage.js
import React from 'react';
import { Image } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const MainImage = () => (
  <div style={{ textAlign: 'center', margin: '20px 0' }}>
    <Image
      src={faker.image.url()} // Generate a random image URL
      size="large"
      centered
    />
  </div>
);

export default MainImage;

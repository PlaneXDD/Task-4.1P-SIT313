// src/components/FeaturedTutorials.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const FeaturedTutorials = () => {
  const tutorials = Array.from({ length: 3 }).map(() => ({
    image: faker.image.url(), // Updated method
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    username: faker.internet.userName(),
  }));

  return (
    <div>
      <h2>Featured Tutorials</h2>
      <Card.Group itemsPerRow={3}>
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <Image src={tutorial.image} />
            <Card.Content>
              <Card.Header>{tutorial.name}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
              <Card.Meta>{tutorial.username}</Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default FeaturedTutorials;

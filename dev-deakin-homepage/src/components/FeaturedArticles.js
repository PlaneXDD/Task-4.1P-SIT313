// src/components/FeaturedArticles.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const FeaturedArticles = () => {
  const articles = Array.from({ length: 3 }).map(() => ({
    image: faker.image.url(), // Updated method
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    author: faker.person.fullName(), // Updated method
  }));

  return (
    <div>
      <h2>Featured Articles</h2>
      <Card.Group itemsPerRow={3}>
        {articles.map((article, index) => (
          <Card key={index}>
            <Image src={article.image} />
            <Card.Content>
              <Card.Header>{article.name}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
              <Card.Meta>{article.author}</Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default FeaturedArticles;

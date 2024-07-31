// src/components/Comment.js
import React, { useState, useEffect } from 'react';
import { Comment, Form, Button, Header } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Set initial comments with avatars
    setComments([
      {
        author: 'Matt',
        avatar: faker.image.avatar(),
        content: 'Great article!',
        date: new Date().toLocaleString(),
      },
    ]);
  }, []);

  const handleAddReply = () => {
    setComments([
      ...comments,
      {
        author: username,
        avatar: faker.image.avatar(),
        content: newComment,
        date: new Date().toLocaleString(),
      },
    ]);
    setNewComment('');
    setUsername('');
  };

  return (
    <Comment.Group>
      <Header as="h3" dividing>Comments</Header>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <Comment.Avatar src={comment.avatar} />
          <Comment.Content>
            <Comment.Author as="a">{comment.author}</Comment.Author>
            <Comment.Metadata>
              <div>{comment.date}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.content}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      ))}
      <Form reply>
        <Form.Field>
          <input
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.TextArea
          placeholder="Your Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={handleAddReply} />
      </Form>
    </Comment.Group>
  );
};

export default CommentSection;

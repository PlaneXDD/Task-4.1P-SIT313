// src/components/SignUp.js
import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const SignUp = () => (
  <div>
    <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
    <Form>
      <Form.Field>
        <input placeholder="Enter your email" />
      </Form.Field>
      <Button type="submit">Subscribe</Button>
    </Form>
  </div>
);

export default SignUp;

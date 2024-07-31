// src/components/Login.js
import React from 'react';
import { Form } from 'semantic-ui-react';
import CustomInput from './Input';
import CustomButton from './Button';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'https://anotherwebsite.com/login';
  };

  return (
    <Form>
      <Form.Field>
        <CustomInput placeholder="Username" />
      </Form.Field>
      <Form.Field>
        <CustomInput type="password" placeholder="Password" />
      </Form.Field>
      <CustomButton onClick={handleLogin} content="Login" />
    </Form>
  );
};

export default Login;

// src/components/Header.js
import React from 'react';
import { Input, Menu, Image } from 'semantic-ui-react';

const Header = () => {
  const handleLogin = () => {
    window.location.href = 'https://anotherwebsite.com/login';
  };

  return (
    <Menu>
      <Menu.Item>
        <Image src="https://upload.wikimedia.org/wikipedia/en/7/74/Deakin_University_Logo_2017.svg" size='small' />
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="post">Post</Menu.Item>
        <Menu.Item name="login" onClick={handleLogin}>Login</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;

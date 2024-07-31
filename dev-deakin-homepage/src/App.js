// src/App.js
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import MainImage from './components/MainImage';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import CommentSection from './components/Comment';

const App = () => (
  <div>
    <Header />
    <MainImage />
    <FeaturedArticles />
    <FeaturedTutorials />
    <SignUp />
    <CommentSection />
    <Footer />
  </div>
);

export default App;

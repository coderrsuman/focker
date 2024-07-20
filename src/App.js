import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
     <BlogPost/>
      <Footer />
    </Router>
  );
}

export default App;

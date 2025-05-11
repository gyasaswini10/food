import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Home from './components/Home';
import Login from './components/login';
import Registration from './components/Registration';
import RecipeRead from './components/RecipeRead';
import Video from './components/Video';
import About from './components/About';
import MyRecipe from './components/MyRecipe'; // Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/recipes" element={<RecipeRead />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-recipes" element={<MyRecipe />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
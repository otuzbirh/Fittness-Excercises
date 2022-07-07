import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import  Navbar  from './components/Navbar';
import  Home  from './pages/Home';
import  ExerciseDetails from './pages/ExerciseDetails'
import  Footer from './components/Footer'
 

function App() {
return (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetails />} />
    </Routes>
    <Footer />

  </Box>
);
}

export default App;

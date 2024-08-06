import "./App.css";
import HouseGrid from "../components/housegrid/HouseGrid";
import Header from "../components/houselist/Header/Header";
import Footer from "../components/houselist/Footer/Footer";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loading-container">
       <Box sx={{ width: '50%' }}>
    <LinearProgress />
  </Box>
       </div>
      ) : (
        
<div className="App">
  <Header />
  <HouseGrid/>
  <Footer />
</div>

      )}
        </div>
   
  );
};

export default App;

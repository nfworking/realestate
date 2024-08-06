import ProductPage from "../components/package1/ProductPage"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState, useEffect } from 'react';
import "./App.css"



const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
  <ProductPage />
</div>

      )}
        </div>
   
  );
};

export default App;

import "./App.css";
import React, { useState, useEffect } from 'react';
import "./style.css";
import Companies from "../components/home/Companies/Companies";
import Contact from "../components/home/Contact/Contact";
import Footer from "../components/home/Footer/Footer";
import GetStarted from "../components/home/GetStarted/GetStarted";
import Header from "../components/home/Header/Header";
import Hero from "../components/home/Hero/Hero";
import Value from "../components/home/Value/Value";
import Testimonals from "../components/testimonals/App";


const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return (
      <div className="container">
        {loading ? (
          <div className="loader-container">
              <div className="spinner"></div>
          </div>
        ) : (
<div className="App">
    <Header />
    <Hero />
    <Companies />
    <Testimonals />
    <Value />
    <GetStarted />
    <Contact />
    <Footer />
</div>

        )}
      </div>
    );
  };

  export default App;

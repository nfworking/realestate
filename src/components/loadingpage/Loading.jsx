import React, { useState, useEffect } from 'react';
import "./style.css"


const Person = () => {
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
<div>hello</div>
      )};
    </div>
  );
};

export default Person;

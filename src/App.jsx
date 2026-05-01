import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* If showProductList is false, show the Landing Page */}
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Every Leaf Tells a Story</p>
            
            {/* Task 4 Requirement: "Get Started" button */}
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        /* If showProductList is true, show the Product Listing Page */
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;

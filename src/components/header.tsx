import React from 'react';
import { FaMotorcycle, FaShoppingBag } from 'react-icons/fa';
import RestaurantSearchBar from './RestaurantSearchBar'; // update the path if needed

interface HeaderProps {
  query: string;
  setQuery: (value: string) => void;
  fetchFoods: () => void;
  setShowAdd: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ query, setQuery, fetchFoods ,setShowAdd }) => {
  return (
    <header className="hero">
      {/* Top Nav */}
      <div className="hero-navbar">
        <div className="hero-logo">🍜 <span>FoodWagen</span></div>
        <button className="hero-add-button" onClick={() => setShowAdd(true)}>Add Meal</button>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-left">
          <h1 className="hero-title">Are you starving?</h1>
          <p className="hero-subtext">Within a few clicks, find meals that are accessible near you</p>

          <div className="hero-search-box">
            {/* Toggle */}
            <div className="hero-toggle">
              <button className="toggle-option active"><FaMotorcycle /> Delivery</button>
              <button className="toggle-option"><FaShoppingBag /> Pickup</button>
            </div>

            {/* Search */}
            <RestaurantSearchBar
              value={query}
              onChange={(value: string) => setQuery(value)}
              onRefresh={fetchFoods}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <img src="/food_pic.png" alt="Food" className="hero-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import pizza from './assets/pizza.jpg';
import burger from './assets/burger.jpeg';
import sushi from './assets/sushi.jpeg';
import pasta from './assets/pasta.jpeg';

// Import Pages
import PricePage from './pages/PricePage';
import AddRestaurantPage from './pages/AddRestaurantPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Sample restaurants data
export const restaurants = [
  {
    id: 1,
    name: "The Pizza Place",
    imageUrl: pizza,
    description: "Best pizza in town, with fresh ingredients.",
    price: "$120",
  },
  {
    id: 2,
    name: "Burger King",
    imageUrl: burger,
    description: "Tasty burgers and fries, perfect for a quick bite.",
    price: "$40",
  },
  {
    id: 3,
    name: "Sushi World",
    imageUrl: sushi,
    description: "Fresh sushi and Japanese cuisine.",
    price: "$400",
  },
  {
    id: 4,
    name: "Pasta House",
    imageUrl: pasta,
    description: "Homemade pasta with delicious sauces.",
    price: "$250",
  },
];

// Navbar component
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://img.icons8.com/ios-filled/50/520617/noodles.png" alt="Logo" />
        <h2 style={{ color: 'white' }}>Zomato</h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to Home */}
        <li><Link to="/price">Price</Link></li>
        <li><Link to="/add-restaurant">Add Restaurant</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  );
};

// Restaurant Card Component
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.imageUrl} alt={restaurant.name} />
      <div className="info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <span className="price">{restaurant.price}</span>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/price" element={<PricePage />} />
          <Route path="/add-restaurant" element={<AddRestaurantPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={
            <div>
              <div className="header">
                <h1>Welcome</h1>
                <p>Find the best restaurants in your city</p>
              </div>
              <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
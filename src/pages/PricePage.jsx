import React from 'react';
import './PricePage.css';
import { restaurants } from '../App';

const PricePage = () => (
  <div className="price-page"> {/* Apply the price-page class here */}
    <h2>Price List</h2>
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <span>{restaurant.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PricePage;


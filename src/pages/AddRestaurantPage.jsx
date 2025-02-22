import React from 'react';
import './AddRestaurantPage.css';

const AddRestaurantPage = () => (
  <div className="add-restaurant-page">  {/* Add the add-restaurant-page class */}
    <form className="add-restaurant-form">  {/* Add the add-restaurant-form class */}
      <h2>Add a New Restaurant</h2>
      <input type="text" placeholder="Restaurant Name" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Price" />
      <input type="file" placeholder="Image" />
      <button type="submit">Add Restaurant</button>
    </form>
  </div>
);

export default AddRestaurantPage;

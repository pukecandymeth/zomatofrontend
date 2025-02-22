import React from 'react';
import '../pages/SignupPage.css';  // Ensure this path is correct

const SignupPage = () => (
  <div className="signup-page">  {/* Add the signup-page class */}
    <form className="signup-form">  {/* Add the signup-form class */}
      <h2>Signup</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

export default SignupPage;


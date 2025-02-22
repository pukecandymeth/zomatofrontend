import React from 'react';
import './LoginPage.css';

const LoginPage = () => (
  <div className="login-page">  {/* Add the login-page class */}
    <form className="login-form">  {/* Add the login-form class */}
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginPage;

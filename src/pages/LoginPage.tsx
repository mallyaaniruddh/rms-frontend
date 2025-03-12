import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAdapter from "../adapters/AuthAdapter";
import "../App.css";  // Import CSS

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  const success = await AuthAdapter.login(email, password);
  if (success) {
    navigate("/dashboard");
  } else {
    setError("Invalid credentials, please try again.");
  }
};

return (
  <div className="login-container">
    <h2>Login</h2>
    {error && <p className="error-message">{error}</p>} {/* Show error message */}
    <form onSubmit={handleLogin} className="login-form">
      <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  </div>
); 
};

export default LoginPage;

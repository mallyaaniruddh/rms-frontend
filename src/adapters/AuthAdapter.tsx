import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "https://your-backend.com/api/auth"; // Replace with actual backend URL

interface DecodedToken {
  exp: number;
}

const AuthAdapter = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const token = response.data.token;
      const decoded: DecodedToken = jwtDecode(token);
      
      // Store token and expiration
      localStorage.setItem("token", token);
      localStorage.setItem("token_expiry", decoded.exp.toString());

      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token_expiry");
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("token_expiry");

    if (!token || !expiry) return false;

    // Check if token is expired
    return parseInt(expiry) * 1000 > Date.now();
  }
};

export default AuthAdapter;

const AuthAdapter = {
  login: async (email: string, password: string) => {
    if (email === "testuser@example.com" && password === "password123") {
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem("isAuthenticated");
  },

  isAuthenticated: () => {
    return localStorage.getItem("isAuthenticated") === "true";
  },
};

export default AuthAdapter;

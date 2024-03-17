import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeContext";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Binder from "./pages/biblio";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";

const handleSignup = (email: string, password: string) => {
  // Implement signup logic here
  console.log("Signing up with:", email, password);
};

const AppRoutes = ({
  onSignup,
}: {
  onSignup: (email: string, password: string) => void;
}) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/binder" element={<Binder />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup onSignup={onSignup} />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/howitworks" element={<HowItWorks />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AppRoutes onSignup={handleSignup} />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

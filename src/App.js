import React, { useState, useEffect } from 'react';

/*Components*/
import NavBar from "./components/Navbar";
import Footer from "./components/footer";


/*Pages*/
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Coffee from "./pages/coffee";

import './styles/loader.css'

import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";


function NotFound() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2000); // Redirect to home after 2 seconds
  return <div>404 - Page Not Found. Redirecting to Home...</div>;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous loading process (replace this with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="Thuo International">
      {isLoading ? (
        <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
      ) : (
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="about" element={<About/>} exact/>
            <Route path="services" element={<Service/>} exact/>
            <Route path="contact" element={<Contact/>} exact/>
            <Route path="coffee" element={<Coffee/>} exact/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Router>
      )}
    </div>
  )
}

export default App;

import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Header />
        <div style={{marginTop: 20}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        </div>
       </Router>
  );
}

export default App;

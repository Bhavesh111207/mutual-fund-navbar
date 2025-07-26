import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { start } from 'repl';

const Dummy = ({ name }) => <div className="p-4 text-xl">{name} Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Dummy name="Home" />} />
          <Route path="/calculator" element={<Dummy name="SIP Calculator" />} />
          <Route path="/planner" element={<Dummy name="SIP Planner" />} />
          <Route path="/explorer" element={<Dummy name="Fund Explorer" />} />
          <Route path="/portfolio" element={<Dummy name="Portfolio" />} />
          <Route path="/academy" element={<Dummy name="Academy" />} />
          <Route path="/contact" element={<Dummy name="Contact" />} />
          <Route path="/login" element={<Dummy name="Login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

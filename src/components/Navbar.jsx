import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  }

  return (
    <header className="header">
      <h1 className="fade-in">Os Anéis de Poder</h1>
      <div className="content">
        <button onClick={handleCreateClick}>
          <FaCirclePlus /> Criar novo anel
        </button>
      </div>
    </header>
  );
}

export default Header;

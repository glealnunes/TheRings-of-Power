import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdCreateNewFolder } from "react-icons/md";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  const handleCreatClick = () => {
    navigate('/create');
  }
  return (
    <header className="header">
      <h1 className="fade-in">Os Anéis de Poder</h1>
      <div className='content'>
        <button className='btn-create' onClick={handleCreatClick}>
        <MdCreateNewFolder /> Criar novo anel
        </button>
      </div>
    </header>
  );
}

export default Header;

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import anelSilmaril from '../../assets/anelSilmaril.png';
import "./ringcard.css"
import { MdEdit, MdDelete } from "react-icons/md";
function RingCard({ anel, onDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/update/${anel.id}`);
  };

  return (
    <div className="cardRing" >
      <header>
      <button onClick={handleEdit} className='edit-btn'>
        <MdEdit size={24} />
      </button>
      <button onClick={() => onDelete(anel.id)} className="delete-btn">
        <MdDelete size={24} />
      </button>
      </header>
      <img src={anelSilmaril} alt={anel.nome} />
      <div className='ringDescription'>
        <p><strong>Poder:</strong> {anel.poder}</p>
        <p><strong>Portador:</strong> {anel.portador}</p>
        <p><strong>Forjado por:</strong> {anel.forjadoPor}</p>
      </div>
      <div className='container-name'>
        <h3>{anel.nome}</h3>
      </div>
    </div>
  );
}

export default RingCard;
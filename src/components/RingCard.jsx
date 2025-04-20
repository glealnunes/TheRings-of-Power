import React from 'react';
import { Link } from 'react-router-dom';
import anelSilmaril from '../assets/anelSilmaril.png';

function RingCard({ anel, onDelete }) {
  return (
    <div className="ring-card">
      <div className="card-actions">
        <Link to={`/update/${anel.id}`} className="edit-btn">Editar</Link>
        <button onClick={() => onDelete(anel.id)} className="delete-btn">Deletar</button>
      </div>
      <img src={anelSilmaril} alt={anel.nome} className="ring-image" />
      <div className="ring-info">
        <p><strong>Poder:</strong> {anel.poder}</p>
        <p><strong>Portador:</strong> {anel.portador}</p>
        <p><strong>Forjado por:</strong> {anel.forjadoPor}</p>
      </div>
      <h3>{anel.nome}</h3>
    </div>
  );
}

export default RingCard;
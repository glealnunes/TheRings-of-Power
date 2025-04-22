import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from "motion/react"
import anelSilmaril from '../../assets/anelSilmaril.png';
import "./update.css";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nome: '',
    poder: '',
    portador: '',
    forjadoPor: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/anel/${id}`)
      .then(res => setValues(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:3000/anel/${id}`, values)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <motion.div
      className="d-flex w-100 vh-100 d-flex flex-column justify-content-center"
      style={{ backgroundColor: "#02010A" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='singleRingCard'>
        <div className="singleRingCard-container">
          <img src={anelSilmaril} alt="Anel" />
          <form onSubmit={handleUpdate} className="form-group">
          <div className='singleRingCard-input'>
            <label htmlFor="nome">Nome do Anel</label>
            <input type="text" value={values.nome} onChange={e => setValues({ ...values, nome: e.target.value })} required />
          </div>
          <div className='singleRingCard-input'>
            <label htmlFor="poder">Poder do Anel</label>
            <input type="text" value={values.poder} onChange={e => setValues({ ...values, poder: e.target.value })} required />
          </div>
          <div className='singleRingCard-input'>
            <label htmlFor="forjadoPor">Forjado Por</label>
            <input type="text" value={values.forjadoPor} onChange={e => setValues({ ...values, forjadoPor: e.target.value })} required />
          </div>
          <div className='singleRingCard-input'>
            <label htmlFor="portador">Portador</label>
            <input type="text" value={values.portador} onChange={e => setValues({ ...values, portador: e.target.value })} required />
          </div>
            <button type="submit">Atualizar</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Update;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from "motion/react"
import anelSilmaril from '../assets/anelSilmaril.png';

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
      <motion.div
        className='d-flex justify-content-center align-items-center container-criar'
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-criar">
          <img src={anelSilmaril} alt="Anel" className="anel-img" />
          <form onSubmit={handleUpdate} className="form-group">
            <input type="text" value={values.nome} onChange={e => setValues({ ...values, nome: e.target.value })} required />
            <input type="text" value={values.poder} onChange={e => setValues({ ...values, poder: e.target.value })} required />
            <input type="text" value={values.forjadoPor} onChange={e => setValues({ ...values, forjadoPor: e.target.value })} required />
            <input type="text" value={values.portador} onChange={e => setValues({ ...values, portador: e.target.value })} required />
            <button type="submit" className="btn-criar">Atualizar</button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Update;

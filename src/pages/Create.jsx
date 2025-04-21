import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"
import anel from '../assets/anelSilmaril.png';

function Create() {
  const [values, setValues] = useState({
    nome: '',
    poder: '',
    portador: '',
    forjadoPor: '',
  });

  const [aneis, setAneis] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/anel')
      .then(res => setAneis(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const counts = aneis.reduce((acc, anel) => {
      acc[anel.forjadoPor] = (acc[anel.forjadoPor] || 0) + 1;
      return acc;
    }, {});

    const { forjadoPor } = values;
    if ((forjadoPor === 'Elfos' && (counts['Elfos'] || 0) >= 3) ||
        (forjadoPor === 'Anões' && (counts['Anões'] || 0) >= 7) ||
        (forjadoPor === 'Homens' && (counts['Homens'] || 0) >= 9) ||
        (forjadoPor === 'Sauron' && (counts['Sauron'] || 0) >= 1)) {
      alert('Número máximo atingido para ' + forjadoPor);
      return;
    }

    axios.post('http://localhost:3000/anel', values)
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
          <img src={anel} alt="Anel" className="anel-img" />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Anel</label>
              <input
                type="text"
                // id="nome"
                name="nome"
                placeholder='Nome do Anel'
                onChange={e => setValues({ ...values, nome: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="poder">Poder do Anel</label>
              <input
                type="text"
                id="poder"
                name="poder"
                placeholder='Poder do Anel'
                onChange={e => setValues({ ...values, poder: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="forjadoPor">Forjado Por</label>
              <input
                type="text"
                id="forjadoPor"
                name="forjadoPor"
                placeholder='Forjado Por'
                onChange={e => setValues({ ...values, forjadoPor: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="portador">Portador</label>
              <input
                type="text"
                id="portador"
                name="portador"
                placeholder='Portador'
                onChange={e => setValues({ ...values, portador: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn-criar">Criar Anel</button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Create;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"
import anel from '../../assets/anel.png';
import "./create.css"

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
        <div className='singleRingCard'>
        <div className="singleRingCard-container">
          <img src={anel} alt="Anel" />
          <form onSubmit={handleSubmit}>
            <div className='singleRingCard-input'>
              <label htmlFor="nome">Nome do Anel</label>
              <input
                type="text"
                 id="nome"
                name="nome"
                onChange={e => setValues({ ...values, nome: e.target.value })}
                required
              />
            </div>
            <div className='singleRingCard-input'>
              <label htmlFor="poder">Poder do Anel</label>
              <input
                type="text"
                id="poder"
                name="poder"
                onChange={e => setValues({ ...values, poder: e.target.value })}
                required
              />
            </div>
            <div className='singleRingCard-input'>
              <label htmlFor="forjadoPor">Forjado Por</label>
              <input
                type="text"
                id="forjadoPor"
                name="forjadoPor"
                onChange={e => setValues({ ...values, forjadoPor: e.target.value })}
                required
              />
            </div>
            <div className='singleRingCard-input'>
              <label htmlFor="portador">Portador</label>
              <input
                type="text"
                id="portador"
                name="portador"
                onChange={e => setValues({ ...values, portador: e.target.value })}
                required
              />
            </div>
            <button type="submit">Criar Anel</button>
          </form>
        </div>
    </div>
     </motion.div>

  );
}

export default Create;

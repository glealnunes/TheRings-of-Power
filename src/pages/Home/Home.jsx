import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from '../../components/Carousel/Carousel';

import "./home.css"


function Home() {
  const [aneis, setAneis] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3000/anel')
      .then(res => setAneis(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir?');
    if (confirm) {
      axios.delete(`http://localhost:3000/anel/${id}`)
      .then(() => setAneis(prev => prev.filter(anel => anel.id !== id)))
        .catch(err => console.log(err));
    }
  };


  return (
    <div className='home'>
      <Header />
      <Carousel aneis={aneis} onDelete={handleDelete} />
      <Footer/>
    </div>
  );
}

export default Home;

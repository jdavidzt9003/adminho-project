import React, { useState } from 'react';
import VisitorForm from './components/VisitorForm';
import VisitorList from './components/VisitorList';
import './styles/app.css';

function App() {
  const [visitantes, setVisitantes] = useState([]);

  const agregarVisitante = (nuevo) => {
    setVisitantes([...visitantes, nuevo]);
  };

  return (
    <div className="app-container">
      <h1>Registro de Visitantes - Conjunto Residencial</h1>
      <VisitorForm onAgregar={agregarVisitante} />
      <VisitorList visitantes={visitantes} />
    </div>
  );
}

export default App;
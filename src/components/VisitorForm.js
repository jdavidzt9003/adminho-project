import React, { useState } from 'react';

function VisitorForm({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: '',
    apartamento: '',
    motivo: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoVisitante = {
      ...form,
      entrada: new Date().toLocaleString(),
      salida: null,
      estado: 'Activo',
    };
    onAgregar(nuevoVisitante);
    setForm({ nombre: '', apartamento: '', motivo: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="visitor-form">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del visitante"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="apartamento"
        placeholder="Número de apartamento"
        value={form.apartamento}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="motivo"
        placeholder="Motivo de la visita"
        value={form.motivo}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrar Visita</button>
    </form>
  );
}

export default VisitorForm;

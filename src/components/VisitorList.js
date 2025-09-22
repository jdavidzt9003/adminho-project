import React from 'react';

function VisitorList({ visitantes }) {
  return (
    <div className="visitor-list">
      <h2>Visitantes Registrados</h2>
      {visitantes.length === 0 ? (
        <p>No hay visitantes registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apartamento</th>
              <th>Motivo</th>
              <th>Entrada</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {visitantes.map((v, i) => (
              <tr key={i}>
                <td>{v.nombre}</td>
                <td>{v.apartamento}</td>
                <td>{v.motivo}</td>
                <td>{v.entrada}</td>
                <td>{v.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default VisitorList;

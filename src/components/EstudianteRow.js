import React from "react";

const EstudianteRow = ({ id, nombre, apellidoPaterno, apellidoMaterno }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{apellidoPaterno}</td>
      <td>{apellidoMaterno}</td>
    </tr>
  );
};

export default EstudianteRow;

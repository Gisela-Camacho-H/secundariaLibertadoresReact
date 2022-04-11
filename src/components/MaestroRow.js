import React from "react";

const MaestroRow = ({ id, nombre, apellidoPaterno, apellidoMaterno }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{apellidoPaterno}</td>
      <td>{apellidoMaterno}</td>
    </tr>
  );
};

export default MaestroRow;

import React from "react";
import Gasto from "./Gasto";

const ListadoDeGastos = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Gastos</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

export default ListadoDeGastos;

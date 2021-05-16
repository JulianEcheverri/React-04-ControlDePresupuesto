import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  // States
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Asigna valor del presupuesto al state
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // Guarda el presupuesto (Submit)
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Ingresa tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingresa tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;

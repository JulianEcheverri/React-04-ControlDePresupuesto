import React, {useState } from "react";
import Error from "./Error";
import shortid from "shortid"

const Formulario = ({guardarNuevoGasto, guardarCrearGasto}) => {
  // States
  const [gasto, guardarGasto] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = e=> {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || gasto.trim() === '') {
        guardarError(true);
        return;
      }
      
      guardarError(false);

      const gastoObj = {
        gasto,
        cantidad,
        id:shortid.generate()
      };

      guardarNuevoGasto(gastoObj);
      guardarCrearGasto(true);
      guardarGasto("");
      guardarCantidad(0);
  }


  return (
    <form 
        onSubmit={agregarGasto}
        >
      <h2>Agrega tus gastos aqui</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={gasto}
          onChange={(e) => guardarGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label> Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="u-full-width button-primary"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;

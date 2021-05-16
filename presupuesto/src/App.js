import React, {useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import ListadoDeGastos from "./components/ListadoDeGastos";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // Hook States
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrar_pregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crear_gasto, guardarCrearGasto] = useState(false);

  // Se usa useEffect en vez de esta funcion que actualza los gastos
  // Pero sirve igualmente
  // const anadirGasto = gasto => {
  //   guardarGasto([
  //     ...gastos,
  //       gasto
  //   ])
  // };

  // Hook useEffect
  useEffect(() =>{
    if (crear_gasto) {
      // Agrega presupuesto
      guardarGastos([
        ...gastos,
          gasto
      ]);
      // Resta del presupuesto
      guardarRestante(restante-gasto.cantidad);
      guardarCrearGasto(false);
    }
  }, [gasto, crear_gasto, gastos, restante, presupuesto, mostrar_pregunta]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {
            mostrar_pregunta ?
            (
              <Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) : 
            (
              <div className="row">
                <div className="one-half column"> 
                  <Formulario
                    guardarNuevoGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListadoDeGastos gastos={gastos}/>
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;

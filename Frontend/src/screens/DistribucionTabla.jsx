import React from "react";
import "./DistribucionTabla.css";
import Especificacion from "../components/Especificacion";
import NTareasCompletas from "../tarea/NTareasCompletas";
import NtiempoFaltante from "../tarea/NtiempoFaltante";
import calcularTiempoTotalEnHoras from "../tarea/CalcularTiempoTotal";

const DistribucionTabla = ({ titulo, funcion }) => {
  let distribucion = null;
  const Tareas_Incompletas = funcion.length;
  const Tareas_Completas = NTareasCompletas();
  const Tiempo_faltante = calcularTiempoTotalEnHoras(funcion);
  const Tiempo_faltante_horas = Math.min((Tiempo_faltante * 25) / 60, 60); // Limitar el valor máximo a 60

  switch (titulo) {
    case "Tareas":
      distribucion = (
        <div className="tabla">
          <Especificacion
            number={Tiempo_faltante_horas.toFixed(2) + " horas"}
            descripcion={"Tiempo estimado"}
          />
          <Especificacion
            number={Tareas_Incompletas}
            descripcion={"Tareas a completar"}
          />
        </div>
      );
      break;
    case "Completado":
      distribucion = (
        <div className="tabla">
          {/* <Especificacion
            number={"horas"}
            descripcion={"Tiempo transcurrido"}
          /> */}
          <Especificacion
            number={Tareas_Completas}
            descripcion={"Tareas completadas"}
          />
        </div>
      );
      break;
    case "Todos":
      distribucion = (
        <div className="tabla">
          <Especificacion
            number={Tiempo_faltante_horas.toFixed(2) + " horas"}
            descripcion={"Tiempo estimado"}
          />
          <Especificacion
            number={Tareas_Incompletas}
            descripcion={"Tareas a completar"}
          />
          {/* <Especificacion
            number={"horas"}
            descripcion={"Tiempo transcurrido"}
          /> */}
          <Especificacion
            number={Tareas_Completas}
            descripcion={"Tareas completadas"}
          />
        </div>
      );
      break;
    case "Prioridad Baja":
      distribucion = (
        <div className="tabla">
          <Especificacion
            number={Tiempo_faltante_horas.toFixed(2) + " horas"}
            descripcion={"Tiempo estimado"}
          />
          <Especificacion
            number={Tareas_Incompletas}
            descripcion={"Tareas a completar"}
          />
          {/* <Especificacion
            number={"horas"}
            descripcion={"Tiempo transcurrido"}
          /> */}
          <Especificacion
            number={Tareas_Completas}
            descripcion={"Tareas completadas"}
          />
        </div>
      );
      break;
    case "Prioridad Media":
      distribucion = (
        <div className="tabla">
          <Especificacion
            number={Tiempo_faltante_horas.toFixed(2) + " horas"}
            descripcion={"Tiempo estimado"}
          />
          <Especificacion
            number={Tareas_Incompletas}
            descripcion={"Tareas a completar"}
          />
          {/* <Especificacion
            number={"horas"}
            descripcion={"Tiempo transcurrido"}
          /> */}
          <Especificacion
            number={Tareas_Completas}
            descripcion={"Tareas completadas"}
          />
        </div>
      );
      break;
    case "Prioridad Alta":
      distribucion = (
        <div className="tabla">
          <Especificacion
            number={Tiempo_faltante_horas.toFixed(2) + " horas"}
            descripcion={"Tiempo estimado"}
          />
          <Especificacion
            number={Tareas_Incompletas}
            descripcion={"Tareas a completar"}
          />
          {/* <Especificacion
            number={"horas"}
            descripcion={"Tiempo transcurrido"}
          /> */}
          <Especificacion
            number={Tareas_Completas}
            descripcion={"Tareas completadas"}
          />
        </div>
      );
      break;
    default:
      distribucion = <div>Error</div>;
      break;
  }
  return <div>{distribucion}</div>;
};

export default DistribucionTabla;

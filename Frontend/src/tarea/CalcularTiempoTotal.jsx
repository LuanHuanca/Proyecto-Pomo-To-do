const calcularTiempoTotalEnHoras = (datosTareas) => {
  let tiempoTotalMinutos = 0;

  // Iterar sobre cada tarea y sumar su tiempo
  datosTareas.forEach((tarea) => {
      tiempoTotalMinutos += tarea.tiempo; // Sumar el tiempo de la tarea en minutos
  });

  // Convertir el tiempo total de minutos a horas
  const tiempoTotalHoras = tiempoTotalMinutos / 60;

  return tiempoTotalHoras;
};

export default calcularTiempoTotalEnHoras;

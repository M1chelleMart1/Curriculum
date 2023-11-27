const estacionamiento = new Array(10).fill(null)

function mostrarEstado(indice = 0, mensaje = "Estado actual del estacionamiento\n"){
  if (indice >= estacionamiento.length){
    alert(mensaje);
    return;
  }

  if (estacionamiento[indice] === null) {
    mensaje += `Espacio ${indice + 1}: Libre\n`
  }else{
    mensaje += `Espacio ${indice + 1}: Ocupado por el vehiculo ${estacionamiento[indice]}\n`
  }

  mostrarEstado(indice + 1, mensaje);
}

function buscaEspacioDisponible(){
  function buscaEspacioRecursivo(indice) {
    if (indice >= estacionamiento.length) {
      return -1;
    }

    if (estacionamiento[indice] === null){
      return indice;
    }
    return buscaEspacioRecursivo(indice + 1);
  }


  const indiceDisponible = buscaEspacioRecursivo(0)
  if (indiceDisponible === -1) {
    alert("No hay espacios disponible.")
    }else{
      alert(`El espacio ${indiceDisponible + 1} esta disponible`)
    }
}

function ocuparEspacio(){
  const espacio = parseInt(prompt("Ingrese el numero de espacio que desea ocupar:"))

  if (isNaN(espacio) || espacio < 1 || espacio > estacionamiento.length){
    alert("Numero de espacio invalido.")
    return;
  }
  if (estacionamiento[espacio - 1] !== null){
    alert("El espacio seleccionado ya esta ocupado.")
    return;
  }
    const vehiculo = prompt("Ingrese el nombre o numero de placa del vehiculo:")
    estacionamiento[espacio - 1] = vehiculo;
    alert(`El espacio ${espacio} ha sido ocupado por el vehiculo ${vehiculo}.`)
}

function liberarEspacio(){
  const espacio = parseInt(prompt("Ingrese el numero de espacio que dese liberar:"))

  if (isNaN(espacio) || espacio < 1 || espacio > estacionamiento.length){
    alert("Numero de espacio invalido.");
    return;
  }

  if (estacionamiento[espacio - 1] === null){
    alert("El espacio seleccionado ya esta libre.")
    return;
  }

  const vehiculo = estacionamiento[espacio -1];
  estacionamiento[espacio - 1] = null;
  alert(`El espacio ${espacio} ha sido liberado. El vehiculo ${vehiculo} ha salido`)
}

function mostrarMenu(){
  var option = prompt("---MENU---\n" +
                      "1. Mostrar estado actual del estacionamiento\n" +
                      "2. Buscar espacio dsiponible\n" +
                      "3. Ocupar espacio\n" +
                      "4. Liberar espacio\n" +
                      "5. Salir")
        switch (option){
          case "1":
            mostrarEstado()
            mostrarMenu()
          case "2":
            buscaEspacioDisponible()
            mostrarMenu()
          case "3":
            ocuparEspacio()
            mostrarMenu()
          case "4":
            liberarEspacio()
            mostrarMenu()
          case "5":
            alert("Saliendo del programa...")
            window.close()
            return;
          default:
            alert("Opcion invalida.")
            break;
        }
}

mostrarMenu()
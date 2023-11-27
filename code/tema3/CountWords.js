// Función para solicitar al usuario que ingrese un texto
function agregarTexto(mapaPalabras) {
  const texto = prompt('Ingresa un texto:')
  alert('Texto agregado correctamente.')
//1.- se encarga de solicitar al usuario que ingrese un texto a través 
//-- de un cuadro de diálogo y luego devuelve el texto ingresado.
  return texto
}


// Función para recibir el mapa de palabras y el texto ingresado
//Recibe el mapa de palabras y el texto ingresado por el usuario.
//1.-Primero, verifica si el texto está vacío y muestra una alerta si es así.
function procesarTexto(mapaPalabras, texto) {
  if (texto === '') {
    alert('No has ingresado ningún texto. Por favor, agrega un texto antes de procesar.')
    return
  }

  const palabras = texto.toLowerCase().split(' ')

  palabras.forEach(palabra => {
    // Eliminar puntos y comas de la palabra
    //Se verifica si la palabra sin puntuación ya existe en el mapa de palabras 
    const palabraSinPuntuacion = palabra.replace(/[.,]/g, '')
    
    if (mapaPalabras.has(palabraSinPuntuacion)) {
      mapaPalabras.set(palabraSinPuntuacion, mapaPalabras.get(palabraSinPuntuacion) + 1)
    } else {
      mapaPalabras.set(palabraSinPuntuacion, 1)
    } 
  })
// 1.-se crea una variable resultado para almacenar el resultado final que se mostrará al usuario
//se va construyendo la cadena resultado concatenando cada palabra y su frecuencia.
//se muestra una alerta con el resultado final, que contiene todas las palabras
// ingresadas por el usuario y su frecuencia.
  let resultado = 'Palabras y su frecuencia:\n'
  mapaPalabras.forEach((frecuencia, palabra) => {
    resultado += `${palabra}: ${frecuencia}\n`
  });

  alert(resultado)
}

// Función para mostrar el menú y procesar las opciones
//es la función principal que se encarga de mostrar un menú al usuario y realizar las
// acciones correspondientes según la opción seleccionada. Dentro de un bucle infinito while
function mostrarMenu() {
  const mapaPalabras = new Map()
  let texto = ''

  while (true) {
    const opcion = prompt(`Menu:
      1. Agregar texto
      2. Procesar texto
      3. Salir`)

    switch (opcion) {
      case '1':
        texto = agregarTexto(mapaPalabras)
        break
      case '2':
        procesarTexto(mapaPalabras, texto)
        break
      case '3':
        alert('Saliendo del programa...')
        window.close()
        return
      default:
        alert('Opción inválida. Por favor, elige una opción válida.')
        break
    }
  }
}

mostrarMenu()
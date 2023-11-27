class Stack {
  constructor() {
    this.data = []
  }

  // Agrega un elemento a la parte superior de la pila
  push(_data) {
    this.data.push(_data)
  }

    // Busca el elemento superior de la pila sin quitarlo.
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía"
      }
      return this.data[this.data.length - 1]
    }

  // Retira y devuelve el elemento superior de la pila.
  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía"
    }
    return this.data.pop()
  }

  // Compruebe si la pila está vacía
  isEmpty() {
    return this.data.length === 0
  }

  // Devuelve el número de elementos en la pila.
  size() {
    return this.data.length
  }

  // Elimina todos los elementos de la pila.
  clear() {
    this.data = []
  }

  // Muestra los elementos de la pila.
  print() {
    let items = "null\n->\n"
    items += this.data.reverse().join('\n -> \n') 
    alert(items)
  }
}

// Define el menú
function menu() {
  const pila = new Stack()

  while (true) {
    const opcion = prompt(
      "Selecciona una opción:\n" +
      "1. Insertar elemento en la cima de la pila\n" +
      "2. Buscar  elemento de la cima de la pila\n" +
      "3. Eliminar  elemento de la cima de la pila\n" +
      "4. Comprabar si la pila esta vacia\n" +
      "5. Mostrar el numero de elemetos de pila\n" +
      "6. Eliminar todos los elemetos de pila\n" +
      "7. Mostrar elementos de la pila\n"+
      "8. Salir"
    )

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a registrar en la pila:")
        pila.push(data)
        menu()
        break
      case "2":
        const resultPeek= pila.peek()
        alert("Resultado de la busqueda: " + resultPeek)
        menu()
        break
      case "3":
        const resultPop = pila.pop()
        alert("Resultado de la eliminación: " + resultPop)
        menu()
        break
      case "4":
        const resultEmpty = pila.isEmpty()
        alert("Resultado del estado de la pila: " + resultEmpty)
        menu()
          break 
      case "5":
        const resultSize = pila.size()
        alert("Resultado del tamaño de la pila: " + resultSize)
        menu()
        break 
      case "6":
        pila.clear()
        alert("Los datos se han borrado")
        menu()
        return
      case "7":
          pila.print()
          return
      case "8":
            window.close()
            return
      default:
        alert("Opción inválida. Intenta nuevamente.")
        break
    }
  }
}

// Ejecuta el menú
menu()
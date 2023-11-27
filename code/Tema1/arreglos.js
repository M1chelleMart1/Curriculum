var lenguajes = ['Python', 'java', 'c#','JavaScrip']



function imprimeForbasico(_lenguajes){
    let salida= ''
    for(i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }
    alert(salida)
 }

function imprimeFor(_lenguajes){
    salida= ''
    for(i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
 }

function imprimeForechbasico(_lenguajes){
    salida=''
    _lenguajes.forEach(element => 
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(_lenguajes){
    salida=''
    _lenguajes.forEach(function (_valor, _indice){
        salida += _valor + ' se encuentra en el indice ' + _indice + '\n'
        })

    alert(salida)
}

function tamañoArreglo(_lenguajes){
  salida ='El tamño del arreglo es: ' + _lenguajes.length
  alert(salida)
}

function muestraElemento(){
  let salida = ''
  let elemento = prompt("Ingrese el indice del elemeto a recueperar: ");
  if(elemento < lenguajes.length){
    salida = lenguajes[elemento]
  }else{
    salida = 'El arreglo solo tiene ' + lenguajes.length + ' elige un indice difrente a ' + elemento
  }
  alert(salida)
}

function ingresaElemeto(){
  let salida = ''
  let elemento = prompt("Ingresa un nuevo lenguaje de programación: ")
  lenguajes.push(elemento)
  salida = 'El lenguaje de programación ' + elemento + ' a sido agregado al arreglo!'

  alert(salida)
}

function eliminaElemento(){
  let salida=''
  let elemento = prompt("Cual es el lunguaje de programación que deseas eliminar")
  var indice = lenguajes.indexOf(elemento)
  if(indice !== -1){
    lenguajes.splice(indice,1)
    salida = 'Lenguaje eliminado: ' + elemento
  }else salida = 'el lenguaje no se ha encontrado'
  alert(salida)
}

function mostrarMenu(){
    opcion = prompt('Seleccione una opción:' + 
    '\n1. Imprimir lenguajes con "for" básico.'+
    '\n2. Imprimir lenguajes con "for" y su índice.' + 
    '\n3. Imprimir lenguajes con "forEach" básico.'+
    '\n4. Imprimir lenguajes con "forEach" y su índice.' + 
    '\n5. Imprimir tamaño de arreglo.' +
    '\n6. Recuperar el elemeto del arreglo.' +
    '\n7. Ingresa elemeto en el arreglo.' +
    '\n8. Elimina elemeto en el arreglo.' +
    '\n9. Salir.' +
    '\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      mostrarMenu();
      break;
    case '2':
      imprimeFor(lenguajes);
      mostrarMenu();
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      mostrarMenu();
      break;
    case '4':
      imprimeForech(lenguajes);
      mostrarMenu();
      break;
    case '5':
      tamañoArreglo(lenguajes);
      mostrarMenu();
      break;
    case '6':
        muestraElemento();
        mostrarMenu();
        break;
    case '7':
        ingresaElemeto();
        mostrarMenu();
        break;
    case '8':
        eliminaElemento();
        mostrarMenu();
        break;
    case "9":
        window.close();
        return;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu()
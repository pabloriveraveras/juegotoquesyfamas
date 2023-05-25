function generarCodigo() {
    var codigo = '';
    var cifras = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    // Generar código de 4 cifras sin repetición
    while (codigo.length < 4) {
      var indice = Math.floor(Math.random() * cifras.length);
      var cifra = cifras[indice];
  
      if (codigo.indexOf(cifra) === -1) {
        codigo += cifra;
      }
    }
  
    return codigo;
  }
  
  function validarCodigo(codigoPropuesto, codigoObjetivo) {
    var toques = [];
    var famas = [];
  
    for (var i = 0; i < codigoPropuesto.length; i++) {
      if (codigoPropuesto[i] === codigoObjetivo[i]) {
        famas.push(codigoPropuesto[i]);
      } else if (codigoObjetivo.indexOf(codigoPropuesto[i]) !== -1) {
        toques.push(codigoPropuesto[i]);
      }
    }
  
    return { toques: toques, famas: famas };
  }
  
  function jugar() {
    var codigoObjetivo = generarCodigo();
    var intentos = 0;
    var ganador = false;
  
    while (!ganador) {
      var codigoPropuesto = prompt('Ingresa un código de 4 cifras:');
      
      // Verificar si el código propuesto es válido
      if (codigoPropuesto && codigoPropuesto.length === 4 && /^[0-9]+$/.test(codigoPropuesto)) {
        var resultado = validarCodigo(codigoPropuesto, codigoObjetivo);
        intentos++;
  
        console.log('Intento #' + intentos + ': ' + codigoPropuesto);
        console.log('Toques: ' + resultado.toques.join(', '));
        console.log('Famas: ' + resultado.famas.join(', '));
  
        if (resultado.famas.length === 4) {
          ganador = true;
          console.log('¡Felicidades! ¡Has adivinado el código en ' + intentos + ' intentos!');
        }
      } else {
        console.log('Código inválido. Por favor, ingresa un código de 4 cifras.');
      }
    }
  }
  
  jugar();
  
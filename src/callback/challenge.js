// ! XMLHttpRequest es quien me ayudara a hacer la peticion a la API 
const XMLHttpRequest = require('xmlhttprequest');
// * URL de la API
const API = 'https://api.escuelajs.co/api/v1';

// ! Esta funcion traera la data de mi API
// * recibe como parametros la URL y la funcion que tomara lo que entregue el llamado a la API
function fetchData(urlApi, callback) {
  // * llamo a XMLHttpRequest
  let xhttp = new XMLHttpRequest();

  // * el metodo open prepara la peticion
  // ! recibe por parametros El protocolo "GET", el URL y true para habilitarlo
  xhttp.open('GET', urlApi, true);

  // ! ejecutamos el metodo onreadystatechange que se ejecutara cuando la propiedad readyState cambie
  xhttp.onreadystatechange = (event) => {
    // ! evaluamos que la propiedad readyState se igual a 4 que es el estado de completado
    if(xhttp.readyState === 4) {
      // ! evaluamos que la propiedad status el codigo sea igual 200 que es OK 
      // * (lo cual indica que todo esta correcto)
      if(xhttp.status === 200) {
        // * aqui ejecutaremos el callback que es la funcion que retendra mis dos valores
        // ! el valor de error que sera igual a null y el response tipo texto que me emtrega el API
        // ! el cual convertiremos a JSON
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      // * en caso de que el codigo dentro de Status no sea igual a 200
      // * se crea un nuevo error y le paso el error y el URL del API
      const error = new Error('Error' + urlApi);
      //  aqui retornaremos el callback que es la funcion que retendra mis dos valores
      // ! el valor de error que sera igual al error y el response que sera igual null
      return callback(error, null);
    }
  }
  // ! este metodo envia la peticion
  xhttp.send();
}
// ! XMLHttpRequest es quien me ayudara a hacer la peticion a la API 
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
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
      } else {
        // * en caso de que el codigo dentro de Status no sea igual a 200
        // * se crea un nuevo error y le paso el error y el URL del API
        const error = new Error('Error' + urlApi);
        //  aqui retornaremos el callback que es la funcion que retendra mis dos valores
        // ! el valor de error que sera igual al error y el response que sera igual null
        return callback(error, null);
      }
    } 
  }
  // ! este metodo envia la peticion
  xhttp.send();
}

// * ejecutamos la funcion que ara una peticion y nos traera la data que necesitamos
fetchData(`${API}/products`, (error1, data1) => {
  // * en caso de que el argumento de error sea verdadero me retornara el error por consola
  if(error1) return console.log(error1);

  // * ejecuto 2 veces mas la funcion para hacer otras peticiones
  fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
    if(error2) return console.log(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if(error3) return console.log(error3);

      // * data de la primera peticion
      console.log(data1[0]);
      // * data de la segunda peticion
      console.log(data2.title);
      // * data de la tercerta peticion
      console.log(data3.name);
    });
  });
});
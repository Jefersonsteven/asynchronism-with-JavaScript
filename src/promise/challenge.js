// * importamos fetch de node_modules
import fetch from "node-fetch";
// * URL del API
const API = 'https://api.escuelajs.co/api/v1';

// * guardamos la ejecucion de fetch dentro de una funcion
function fetchData(urlApi) {
  // * fetch es una promise
  return fetch(urlApi);
};

// * se ejecuta la funcion fetchData pasandole por agumento la URL del API
fetchData(`${API}/products`)
  // * convertimos la respuesta a json
  .then(response => response.json())
  // * Utilizamos ese JSON 
  .then(products => {
    // * mostramos el JSON por consola
    console.log(products);
  })
  .then(() => {
    console.log('Esto esta de locos Wey!!');
  })
  .catch(error => console.log(error));


// * //////////////////////////////////////////////////////////////////////////////

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('he terminado'));

  
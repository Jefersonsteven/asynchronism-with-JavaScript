// * importamos fetch 
import fetch from "node-fetch";
// * esta es la URL del API
const API = 'https://api.escuelajs.co/api/v1';

// * se establece la funcion que ejecutara fetch para traer la data atravez del API
const fetchData = async (urlApi) => {
  // * guardamos la ejecucion de la peticion = la respuesta de la peticion
  const response = await fetch(urlApi);
  // * convertimos la respuesta de la peticion a JSON
  const data = await response.json();
  // * retornamos la data en formato JSON
  return data;
}

// * se estable la funcion que ejecutara la peticion
async function anotherFunction(urlApi) {
  // * si la peticion me da una respuesta se ejecutara lo que esta dentro del try
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);

  } 
  // * si la peticion es rellazada se ejecutara lo que este dentro de cacth 
  catch (error) {
    console.error(error);
  }
  // * lo que este dentro de finally se ejecutara independientemente de si se ejecuta try o catch
  finally {
    console.log('He terminado');
  }
}

anotherFunction(API);


export async function runCode() {
  // Tu código aquí 👈
  const url = 'https://domain-api-com';
  const response = await fetch(url);
  const data = await response.json();

  try {

  } catch {
    throw new Error('API Not Found');
  }
}

runCode();
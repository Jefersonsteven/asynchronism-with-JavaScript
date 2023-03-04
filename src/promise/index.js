// ! Una promesa tiene 3 estados PENDIENTE, CUMPLIDO O RECHAZADO

// * asi se escribe una promise
const promise = new Promise((resolve, reject) => {
  resolve('hey!')
});

// * variable a evaluar
const cows = 15;
// * asi se escribe una promise
const countCows = new Promise((resolve, reject) => {
  // * condicion para que la promesa se resuelva o sea rechazada
  if(cows >= 10) {
    //* resolve es lo que devuelve si la condicion fue evaluada como true
    resolve(`We have ${cows} cows on the farm`);
  } else {
    //* reject es lo que devuelve si la condicion fue evaluada como false
    reject("There is not on the farm");
  }
});

// * se ejecuta la promise
countCows
// * then muestra el resolve
.then((result) => console.log(result))
// * cath muestra el reject
.catch((error) => console.log(error))
// * finally es lo que se ejecuta al final independientemente de que se resuelva o se rechaze la promesa
.finally(() => console.log('Finally'));

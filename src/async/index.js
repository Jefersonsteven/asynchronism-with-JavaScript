const ftAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=> resolve('Toma!!'), 2000)
      : reject(new Error('Error!'))
  });
};

const ft = async () => {
  const promise = await ftAsync();
  console.log(promise);
  console.log('Hello');
}

console.log('Before');

ft();

console.log('After');
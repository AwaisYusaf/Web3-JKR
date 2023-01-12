const add = (...params) => {
  let sum = 0;
  params.forEach((item) => {
    sum += item;
  });
  return sum;
};
console.log(add(5, 5, 5));

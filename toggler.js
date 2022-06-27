const toggler = (...list) => {
  let current = -1;
  const length = list.length;
  return function () {
    current = (current + 1) % length;
    return list[current];
  };
};

const toggle = toggler("1", "2", "3");
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());

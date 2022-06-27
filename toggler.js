const toggler = (...list) => {
  // to track the cycle
  let current = -1;
  const length = list.length;
  return function () {
    //moves to next element, resets to 0 when current > length
    current = (current + 1) % length;
    return list[current];
  };
};

const toggle = toggler("1", "2", "3");
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());

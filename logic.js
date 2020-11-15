// 1 вариант
let buySomeBread1 = function(eggs) {
  if (eggs) {
    return 10;
  } else {
    return 1;
  }
};

console.log(buySomeBread1(true));

// 2 вариант
let buySomeBread2 = function(eggs) {
  return eggs ? 10 : 1;
};

console.log(buySomeBread2(true));
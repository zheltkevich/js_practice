// 1 Вариант
// let time = 3;
// let speedOfFirstCyclist = 12;
// let speedOfSecondCyclist = 14;

// let calculateDistance = function() {
//   let distanceOfFirstCyclist = speedOfFirstCyclist * time;
//   let distanseOfSecondCyclist = speedOfSecondCyclist * time;
//   let totalDistance = distanceOfFirstCyclist + distanseOfSecondCyclist;
  
//   return totalDistance;
// };

// console.log('Итоговый результат: ' + calculateDistance() / 2);


// 2 Вариант
let calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
  let distanceOfFirstCyclist = speedOfFirstCyclist * time;
  let distanseOfSecondCyclist = speedOfSecondCyclist * time;
  let totalDistance = distanceOfFirstCyclist + distanseOfSecondCyclist;
  
  return totalDistance;
};

console.log('Итоговый результат: ' + calculateDistance(3, 12, 14));

let firstDistance = calculateDistance(3, 12, 14);
let secondDistance = calculateDistance(5, 1, 2);

console.log('Первая дистанция: ' + firstDistance + ';', 'Вторая дистанция: ' + secondDistance);
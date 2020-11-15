// Рандомизатор
let numbers = [1, 2, 3, 4, 5];

console.log('Случайное число: ' + numbers[Math.floor(Math.random() * numbers.length)]);

// Перебор значений массива
// 1
// let printNames = function(names) {
//   let index = 0;
//   console.log('Элемент ' + index + ': ' + names[index]);
//   index = index + 1;
//   console.log('Элемент ' + index + ': ' + names[index]);
//   index = ++index;
//   console.log('Элемент ' + index + ': ' + names[index]);
//   index++;
//   console.log('Элемент ' + index + ': ' + names[index]);
// };

// printNames(['Саурон', 'Кащей', 'Пендальф', 'Радагаст']);

// 2
// let printNames = function(names) {
//   let index = 0; //Начальное значение
  
//   while (index < names.length) { //Условие останова
//     console.log('Элемент ' + index + ': ' + names[index]);
//     index = index + 1; //Закон изменения
//   }
// };

// printNames(['Геннадий', 'Вячеслав', 'Василий', 'Павел', 'Максим']);
// console.log('---------------------------');
// printNames(['Пендальф', 'Радагаст']);

// 3
let printNames = function(names) {

  for (let i = 0;            // Инициализация
      i < names.length;      // Условие останова
      i++) {                 // Закон изменения
    console.log('Элемент ' + i + ': ' + names[i]);
  }
};

printNames(['Геннадий', 'Вячеслав', 'Василий', 'Павел', 'Максим']);
console.log('---------------------------');
printNames(['Пендальф', 'Радагаст']);
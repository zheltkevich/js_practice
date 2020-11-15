// 1 вариант
let washNextItem1 = function(itemsLeft) {
  itemsLeft--;
  console.log('Осталось ' + itemsLeft + ' штук');

  if (itemsLeft > 0) {
    washNextItem1(itemsLeft);
  }
};

washNextItem1(10);

// 2 вариант
let items = function(itemsLeft) {
  while (itemsLeft-- > 0) {
    console.log('Осталось ' + itemsLeft + ' штук');
  }
};

items(20);
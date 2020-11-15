let cat = {
  name: 'Федор',
  age: 4
};

console.log(cat.name, cat['age']);

let wizard = {
  name: 'Пендальф',
  level: 2,

  say: function() {
    console.log(wizard.name + ' говорит: Ты не пройдешь! Мой уровень: ' + wizard.level);
  },

  levelUp: function(level) {
    wizard.level += level;
  }
};

console.log(wizard);
console.log(wizard.say);
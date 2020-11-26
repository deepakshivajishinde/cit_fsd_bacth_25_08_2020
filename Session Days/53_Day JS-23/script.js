function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    console.log("can eat");
  },
};

const canWalk = {
  walk: function () {
    console.log("can walk");
  },
};

const canSwim = {
  swim: function () {
    console.log("can swim");
  },
};

function Human() {}

mixin(Human.prototype, canEat, canWalk);

var human = new Human();

function GoldFish() {}
mixin(GoldFish.prototype, canEat, canSwim);
var goldFish = new GoldFish();
goldFish.eat();

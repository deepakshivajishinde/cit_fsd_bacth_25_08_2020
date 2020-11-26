function Shape() {
  this.width = 10;
}
Shape.prototype.draw = function () {
  console.log(this.width);
};

function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    console.log(this.radius);
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

var obj = new Circle(10);
obj.draw();

/*Circle.prototype.draw = function () {
  console.log("this is a draw method");
  console.log(this.radius);
};*/

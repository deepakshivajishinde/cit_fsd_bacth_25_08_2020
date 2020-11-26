function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.draw = function () {
  console.log(this.color);
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
  this.move1 = function () {
    console.log(this.radius);
  };
}
extend(Circle, Shape);

Circle.prototype.draw = function () {
  Shape.prototype.draw.call(this);
  console.log("this circle method");
};

var obj = new Circle(10, "red");
obj.draw();

function Square(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
  this.move1 = function () {
    console.log(this.radius);
  };
}

extend(Square, Shape);

var obj1 = new Square(10, "green");

obj1.draw();

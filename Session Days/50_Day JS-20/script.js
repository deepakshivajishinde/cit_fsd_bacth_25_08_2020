function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    console.log(this.radius);
  };
}
var obj = new Circle(10);
console.log(obj);
console.log(obj.toString());

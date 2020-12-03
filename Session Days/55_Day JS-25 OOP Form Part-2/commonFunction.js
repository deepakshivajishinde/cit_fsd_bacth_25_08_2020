function CommonFunction() {}
CommonFunction.prototype.getById = function (idName) {
  return document.getElementById(idName);
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

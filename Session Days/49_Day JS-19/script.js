// factory function
function createObj() {
  return {
    name: "Deepak",
    mobileNumber: 8007070845,
    addStudent: function () {
      console.log(this.name);
    },
  };
}

//constructor function
function CreateClass(name) {
  this.name = name;
  this.mobileNumber = 8007070845;
  this.callStudent = function () {
    console.log(this.name);
  };
  this.studentDetails = {
    name: "Divya",
  };
}

//CreateClass.prototype.address = "Nashik";

/*CreateClass.prototype.addStudent = function () {
  console.log(this.name);
  console.log(this.mobileNumber);
  console.log(this.studentDetails);
  this.callStudent();
  console.log(this.address);
};*/

var obj1 = new CreateClass("Nikhil");
obj1["address"] = "Nagar";

obj1["addStudent"] = function () {
  console.log(this.name);
  console.log(this.mobileNumber);
  console.log(this.studentDetails);
  this.callStudent();
  console.log(this.address);
};

obj1.addStudent();

var obj2 = new CreateClass("Sai");

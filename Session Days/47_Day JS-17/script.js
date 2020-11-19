function createObj() {
  return {
    name: "Deepak",
    mobileNumber: 8007070845,
    addStudent: function () {
      console.log(this.name);
    },
  };
}
var $ = createObj();

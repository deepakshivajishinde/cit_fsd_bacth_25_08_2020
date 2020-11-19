var a = "2";

var array = [
  {
    name: "Deepak",
    address: "Nashik",
    school: "SEMS",
    mobile: "9921454000",
    bGroup: "A+",
  },
  {
    name: "Sonali",
    address: "Nagpur",
    school: "SEMS",
    mobile: "9921454000",
    bGroup: "B+",
  },
  {
    name: "Divay",
    address: "Nagar",
    school: "SEMS",
    mobile: "9921454000",
    bGroup: "B+",
  },
  {
    name: "Prashant",
    address: "Aurangabad",
    school: "ABC",
    mobile: "9921454000",
    bGroup: "AB+",
  },
]; //json array
console.log(array.length);

var tbody = document.getElementById("tbody");
tbody.innerHTML = `<tr>
                        <td colspan="5">No Data To Display</td>
                    </tr>`;

//var filterStudent = array.filter(function (value) {});

var inputFilter = document.getElementById("inputFilter");

inputFilter.addEventListener("keyup", function () {
  var _this = this;
  var inputValue = _this.value;
  if (inputValue == "") {
    printList();
    return false;
  }
  printFilter(inputValue);
});

function printFilter(inputValue) {
  var _tr = "";
  array
    .filter(function (value) {
      if (value.bGroup == inputValue) return value;
    })
    .map(function (value, index) {
      _tr += ` <tr>
                    <td>${index + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.address}</td>
                    <td>${value.mobile}</td>
                    <td>${value.bGroup}</td>
                </tr>`;
    });
  tbody.innerHTML = _tr;
}

function printList() {
  var _tr = "";
  array.map(function (value, index) {
    _tr += ` <tr>
                    <td>${index + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.address}</td>
                    <td>${value.mobile}</td>
                    <td>${value.bGroup}</td>
                </tr>`;
  });
  tbody.innerHTML = _tr;
}
printList();

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
]; //json array
console.log(array.length);

var tbody = document.getElementById("tbody");
tbody.innerHTML = `<tr>
                        <td colspan="5">No Data To Display</td>
                    </tr>`;
var _tr = "";

var filterStudent = array.filter(function (value) {
  if (value.bGroup == "B+" && value.address == "Nagpur") return value;
});

filterStudent.map(function (value, index) {
  _tr += ` <tr>
                  <td>${index + 1}</td>
                  <td>${value.name}</td>
                  <td>${value.address}</td>
                  <td>${value.mobile}</td>
                  <td>${value.bGroup}</td>
              </tr>`;
  /*return {
      student_name: "Jr." + value.name,
      parent_number: value.mobile,
    };*/
});
tbody.innerHTML = _tr;
//console.log(studentNameList);
/*array.forEach(function (value, index) {
  _tr += ` <tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.address}</td>
                <td>${value.mobile}</td>
                <td>${value.bGroup}</td>
            </tr>`;
});
tbody.innerHTML = _tr;*/

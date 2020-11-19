var userInput = document.getElementById("userInput");
var userText = document.getElementById("userText");
var tbody = document.getElementById("tbody");
var isEdit = -1;

tbody.innerHTML = `<tr>
                      <td colspan="3">No Student List</td>
                  </tr>`;

var studentNameList = ["Deepak", "Anil", "Gaurav", "Sonali"];

userInput.addEventListener("keyup", function () {
  var _this = this;
  userText.innerHTML = _this.value;
});

var btn = document.getElementById("saveStudentInfo");
printList(studentNameList);

btn.addEventListener("click", function () {
  var studentName = userInput.value;
  if (isEdit == -1) {
    studentNameList.push(studentName);
  } else {
    studentNameList[isEdit] = studentName;
    btn.innerText = "CLICK";
    isEdit = -1;
  }
  userInput.value = "";
  printList(studentNameList);
});

function printList(studentNameList) {
  var _tr = "";

  if (studentNameList.length == 0) {
    tbody.innerHTML = `<tr>
    <td colspan="3">No Student List</td>
    </tr>`;
    return false;
  }
  studentNameList.forEach(function (arrayValue, arrayIndex) {
    _tr += `<tr> 
              <td>${arrayIndex + 1}</td>
              <td>${arrayValue}</td>
              <td><button class="btn-danger" onclick="deleteUser(this,${arrayIndex})">R</button>
              <button class="btn-primary" onclick="editUser(this,${arrayIndex})">E</button></td>
            </tr>`;
  });
  tbody.innerHTML = _tr;
}

function deleteUser(_this, index) {
  if (isEdit == -1) {
    studentNameList.splice(index, 1); //0,1
    printList(studentNameList);
  } else {
    alert("Delete is locked !!! ");
  }
}

function editUser(_this, index) {
  var studentName = studentNameList[index];
  userInput.value = studentName;
  btn.innerText = "Edit";
  isEdit = index;
}

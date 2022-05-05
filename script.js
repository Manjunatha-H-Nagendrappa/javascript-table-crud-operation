function showErr(elemId, message) {
  document.getElementById(elemId).innerHTML = message;
}

function validate() {
  var name = document.getElementById("name").value;
  var nameErr = true;
  if (name == "") {
    showErr("nameErr", "please enter a name");
  } else {
    showErr("nameErr", "");
    nameErr = false;
  }

  if (nameErr == true) {
    return false;
  } else {
    console.log(name);
  }
  return true;
}

var selectedRow = null;

function formSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) {
      insertFormData(formData);
    } else {
      updateFormData(formData);
    }
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertFormData(data) {
  var table = document
    .getElementById("formList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick="editFormData(this)">Edit</a>
                     <a onClick="deleteFormData(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function editFormData(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateFormData(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.phone;
  selectedRow.cells[3].innerHTML = formData.city;
}

function deleteFormData(td) {
  if (confirm("Are you sure you want to delete the data?")) {
    row = td.parentElement.parentElement;
    document.getElementById("formList").deleteRow(row.rowIndex);
    resetForm();
  }
}

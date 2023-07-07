var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["NOMBRE"] = document.getElementById("NOMBRE").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
		cell0.innerHTML = data.ID;
    cell1 = newRow.insertCell(1);
		cell1.innerHTML = data.NOMBRE;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("NOMBRE").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.NOMBRE;
}

//Delete the data
function onDelete(td) {
    if (confirm('Está seguro que quiere eliminar)?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("ID").value = '';
    document.getElementById("NOMBRE").value = '';
    selectedRow = null;
}

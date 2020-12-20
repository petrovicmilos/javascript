function LocalFormData (form){ //Uzimamo vrednosti iz inputa i stavljamo u objekat
    this.firstName = form[0].value ? form[0].value : form[0].textContent;
    this.lastName = form[1].value ? form[1].value : form[1].textContent;
    this.age = form[2].value ? form[2].value : form[2].textContent;
    this.height = form[3].value ? form[3].value : form[3].textContent;
    this.position = form[4].value ? form[4].value : form[4].textContent;

    this.getParamInputField = function(varName) {
        return `<input value="${this[varName]}"/>`;
      } 
      this.getSelectInput = function() {
        return `
        <select name="position" id="position">
            <option value="" disabled selected>Select a position</option>
            <option value="point-guard">#1 - Point guard</option>
            <option value="shooting-guard">#2 - Shooting guard</option>
            <option value="small-forward">#3 - Small forward</option>
            <option value="power-forward">#4 - Power forward</option>
            <option value="center">#5 - Center</option>
        </select>
        `;
      }
}

var getDataFromForm = function (event) {
    
    var form = event.currentTarget;
  
    var data = new LocalFormData(form);
    form.reset();
    return data;
  };

  var editButton = function (event){
    var trow = event.currentTarget.parentElement.parentElement;
    var data = new LocalFormData(trow.children);
    console.log(data);
    trow.children[0].innerHTML = data.getParamInputField('firstName');
    trow.children[1].innerHTML = data.getParamInputField('lastName');
    trow.children[2].innerHTML = data.getParamInputField('age');
    trow.children[3].innerHTML = data.getParamInputField('height');
    trow.children[4].innerHTML = data.getSelectInput(position);
    trow.children[5].innerHTML = "";

    var saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', function(saveEvent){
      if( 
        trow.children[0].firstChild.value.match(letters) && 
        trow.children[1].firstChild.value.match(letters) && 
        trow.children[2].firstChild.value.match(num) && 
        trow.children[3].firstChild.value.match(num) 
      ){
        var row = saveEvent.currentTarget.parentElement.parentElement; // ???

        trow.children[0].innerHTML = trow.children[0].firstChild.value;
        trow.children[1].innerHTML = trow.children[1].firstChild.value;
        trow.children[2].innerHTML = trow.children[2].firstChild.value;
        trow.children[3].innerHTML = trow.children[3].firstChild.value;
        trow.children[4].innerHTML = trow.children[4].firstChild.nextSibling.value;
        trow.children[5].innerHTML = "";
        trow.children[5].appendChild(getEditButton());
        trow.children[5].appendChild(getDeleteButton());
      } else {
        alert('Podaci nisu validni');
      }

    });

    // Discard button ???
    // Save and discard button showing after save
    
      var discartButton = document.createElement('button');
      discartButton.textContent = 'Discart';
      discartButton.className = 'btn btn-warning';
      /* discartButton.addEventListener('click', funtion(disEvent){

          
      }); */

      
      

      trow.children[5].appendChild(saveButton);
      trow.children[5].appendChild(discartButton);


}

   var getEditButton = function() {
      var editAction = document.createElement("button");
      editAction.textContent = `Edit`;
      editAction.className = 'btn btn-success';
      
      editAction.addEventListener("click", editButton);
      
        return editAction;
  }

  var deleteButton = function(event){
    var result = window.confirm("Are you sure you want to delete this row?");
    if(result){
      var trow = event.currentTarget.parentElement.parentElement;
      trow.remove();
    }

    
  }

  var getDeleteButton = function (){
    var deleteAction = document.createElement("button");
    deleteAction.textContent = "Delete";
    deleteAction.className = "btn btn-warning";
    deleteAction.addEventListener('click', deleteButton);

    return deleteAction;
  }

  var letters = /^[A-Za-z]+$/;
  var num = /^[1-9][0-9]+$/;

var addDataIntoTable = function (data) {
  var table = document.getElementById("table");
  var row = document.createElement("tr");

  //validation
  if (
    data.firstName.match(letters) &&
    data.lastName.match(letters) &&
    data.age.match(num) &&
    data.height.match(num)
  ) {
    var firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = data.firstName;
    row.appendChild(firstNameCell);
    var lastNameCell = document.createElement("td");
    lastNameCell.innerHTML = data.lastName;
    row.appendChild(lastNameCell);
    var ageCell = document.createElement("td");
    ageCell.innerHTML = data.age;
    row.appendChild(ageCell);
    var heightCell = document.createElement("td");
    heightCell.innerHTML = data.height;
    row.appendChild(heightCell);
    var positionCell = document.createElement("td");
    positionCell.innerHTML = data.position;
    row.appendChild(positionCell);
    var actionCell = document.createElement("td");

    /* action buttons elements
    var editAction = document.createElement("button");
    editAction.textContent = `Edit`; */


    actionCell.appendChild(getEditButton());
    actionCell.appendChild(getDeleteButton());

    row.appendChild(actionCell);

    table.appendChild(row);
  } else alert("Podaci nisu validni");
};

var form = document.getElementById("form-input");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var data = getDataFromForm(event);
  addDataIntoTable(data);
 
});
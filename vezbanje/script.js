function getDataFromInput (event) {
    
     var firstName = document.getElementById('firstName').value;
     var lastName = document.getElementById('lastName').value;
     var age = document.getElementById('age').value;
     var height = document.getElementById('height').value;
     var position = document.getElementById('position').value;
     var date = new Date();
     var getDate = date.toString().slice(0, 25);
     
    //  var dd = String(date.getDate());
    //  date = dd;

     var editButtonFunc = function (event) {
        var trow = event.currentTarget.parentElement.parentElement;

        trow.children[0].innerHTML = `<input type="text" value=${firstName}>`;
        trow.children[1].innerHTML = `<input type="text" value=${lastName}>`;
        trow.children[2].innerHTML = `<input type="text" value=${age}>`;
        trow.children[3].innerHTML = `<input type="text" value=${height}>`;
        trow.children[4].innerHTML = `<select name="position" id="position">
                <option value="" disabled selected>Select a position</option>
                <option value="point-guard">#1 - Point guard</option>
                <option value="shooting-guard">#2 - Shooting guard</option>
                <option value="small-forward">#3 - Small forward</option>
                <option value="power-forward">#4 - Power forward</option>
                <option value="center">#5 - Center</option>
            </select>`;
        trow.children[5].innerHTML = "";


        var saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.className = 'btn btn-success';
        saveButton.addEventListener('click', function(saveEvent){
            var trow = saveEvent.currentTarget.parentElement.parentElement;

            trow.children[0].innerHTML = trow.children[0].firstChild.value;
            trow.children[1].innerHTML = trow.children[1].firstChild.value;
            trow.children[2].innerHTML = trow.children[2].firstChild.value;
            trow.children[3].innerHTML = trow.children[3].firstChild.value;
            trow.children[4].innerHTML = trow.children[4].firstChild.value;
            trow.children[5].innerHTML = "";
            trow.children[5].appendChild(editButton);
            trow.children[5].appendChild(deleteButton);
            var date = new Date();
            var getDate = date.toString().slice(0, 25);
            trow.children[7].innerHTML = getDate;
            
            
            
            
        });

            trow.children[5].appendChild(saveButton);
            // trow.children[5].appendChild(discartButton);

           ;


     }

     var deleteButtonFunc = function (event){
         var result = window.confirm('Are you sure?');
         if(result){
             var trow = event.currentTarget.parentElement.parentElement;
             trow.remove();

         }
         
     }

     var table = document.getElementById('table');
     var trow = document.createElement('tr');

     var firstNameCell = document.createElement('td');
     firstNameCell.innerHTML = firstName;
     trow.appendChild(firstNameCell);

     var lastNameCell = document.createElement('td');
     lastNameCell.innerHTML = lastName;
     trow.appendChild(lastNameCell);

     var ageCell = document.createElement('td');
     ageCell.innerHTML = age;
     trow.appendChild(ageCell);

     var heightCell = document.createElement('td');
     heightCell.innerHTML = height;
     trow.appendChild(heightCell);

     var positionCell = document.createElement('td');
     positionCell.innerHTML = position;
     trow.appendChild(positionCell);

     var actionCell = document.createElement('td');
     var editButton = document.createElement('button');
     editButton.innerText = 'Edit';
     editButton.className = 'btn btn-success';
     editButton.addEventListener('click', editButtonFunc);
     actionCell.appendChild(editButton);

     var deleteButton = document.createElement('button');
     deleteButton.innerText = 'Delete';
     deleteButton.className = 'btn btn-warning';
     deleteButton.style = 'margin-left: 5px';
     deleteButton.addEventListener('click', deleteButtonFunc);
     actionCell.appendChild(deleteButton);

     trow.appendChild(actionCell);

     var dateCell = document.createElement('td');
     dateCell.innerHTML = getDate;
     trow.appendChild(dateCell);

     var editDateCell = document.createElement('td');
     editDateCell.innerHTML = "";
     trow.appendChild(editDateCell);
     




     table.appendChild(trow);

     event.preventDefault();

}

    var form = document.getElementById('form-input');

    form.addEventListener('submit', getDataFromInput);

    
    




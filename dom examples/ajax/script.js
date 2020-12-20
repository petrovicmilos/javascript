function getData() {
    var request = new XMLHttpRequest();

    request.addEventListener("load", function(){
        var data = JSON.parse(event.currentTarget.response);
        //   console.log(data);  
        usersFromSameAge(data);
        
        
    }) 
        

    request.open("GET", "https://run.mocky.io/v3/06aa8703-a145-45b2-9a62-0a2d461e9f0c");

    request.send();
}

function usersFromSameAge (users) {
    
    var listOfUserPerAge = [];

    for (var i = 25; i<40; i++){ 
        var usersFromSameAge = users.filter(function(user){
            return user.age == i;
        });

        listOfUserPerAge.push(usersFromSameAge);
    }

    for (var i=0; i<listOfUserPerAge.length; i++){
        console.log(i+25);
        console.log(listOfUserPerAge[i].length);

        addDataToTable(i+25, listOfUserPerAge[i].length);
    }
   
    
    
      function addDataToTable(age, numberOfUsers){
        var table = document.getElementById("table");
        var row = document.createElement('tr');

        var ageCell = document.createElement('td');
         ageCell.textContent = age;
         row.appendChild(ageCell);

         var numberOfUsersCell = document.createElement('td');
         numberOfUsersCell.textContent = numberOfUsers;
         row.appendChild(numberOfUsersCell);

         table.appendChild(row);

         


    }
     
    
}
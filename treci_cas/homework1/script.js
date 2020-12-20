var input = window.prompt("Insert your role: student, admin, professor, receptionist");

function role (){
    if(input == "student"){
        document.getElementById("menu").style.display = "block";
       
    }

    else if (input == "admin" || input == "professor"){
        document.getElementById("menu2").style.display = "block";
    }

    else if(input == "receptionist"){
        document.getElementById("menu3").style.display = "block";
    }
    else {
        alert("This role is not available!");
    }
}

role();
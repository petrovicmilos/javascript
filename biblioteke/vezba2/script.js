

var data;

$(document).ready(function(){
    $("#calculate").on("click", getInputs);
});



function getInputs (){
    $.ajax({
        url: "https://run.mocky.io/v3/d4e997fe-43ae-436d-b60c-31c305399520",
        method: "GET"
    }).done(function(data) {
        console.log(data);
        var checkedFilter = $("input[name='filter']:checked").val();
        if(!checkedFilter) {
           alert("Please select something!");
           return;
        }
        if(checkedFilter == "even"){
            data = data.filter(x => x%2 == 0);
        } else if (checkedFilter == "odd"){
            data = data.filter(x => x%2 != 0);
        }

        var checkedAction = $("input[name='action']:checked").val();

        if(!checkedAction) {
            alert("Please select something!");
            return;
         } 

         if(checkedAction == "increase"){
             data = data.map(x => x+3);
         } else if (checkedAction == "multiply") {
             data = data.map(x => x*2);
         }
         
         console.log(data);

         var checkedDisplay = $("input[name='display']:checked").val();

         if(!checkedDisplay){
            alert("Please select something!");
            return;
         }

         if(checkedDisplay == "log"){
             console.log(data);
         } else {
             alert(data);
         }
    });
  
}
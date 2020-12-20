function removeLastElementFromList () {
    var lastElement = document.querySelector('#list > ul > li:last-child');
   /*  lastElement.parentNode.removeChild(lastElement); */
   /* lastElement.remove(); */
}

function capitalizeTextContent(){
    var listEl = document.querySelectorAll("#list-mody > ul > li");
    
    for(var i = 0; i < listEl.length; i++){
        var txt = listEl[i].firstChild.textContent;
        
        var capitalizedTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
        listEl[i].firstChild.textContent = capitalizedTxt;
        
    }

    console.log(listEl);
}

function addListTextToInput(){
    var listEl = document.querySelectorAll("#list-mody-input > ul > li");
    var inputResult = document.querySelector("#list-mody-input > input");

   var liTextContent =  Array.from(listEl).reduce(function(acc, li) {
       var capitalazedTxt =  capitalize(li.firstChild.textContent);
       acc += ", " + capitalazedTxt;
       return acc;
    }, "")

    inputResult.value += liTextContent;
}

function capitalize(txt){
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}

function triggerAll(){
    removeLastElementFromList();
    capitalizeTextContent();
    addListTextToInput();
}


/* Modifying elements text content */


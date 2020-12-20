function getAllButtons () {
    var buttons = document.querySelectorAll('button');

    for(var button of buttons){

        button.addEventListener('click', setInput)
        
    }


}

var inputText = document.getElementById('textArea');

var setInput = function (event){
    var button = event.currentTarget.innerHTML;  
     inputText.value += button;
     
}

function equals (){
    var result = inputText.value;
    inputText.value = eval(result);
}

getAllButtons();








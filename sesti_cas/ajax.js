var jsonRequest = new XMLHttpRequest();

jsonRequest.addEventListener('load',function(){
    console.log(this.response);
    var realResponse = JSON.parse(this.response);
    
    console.log(arguments);
});

jsonRequest.open("GET", "https://dog.ceo/api/breeds/image/random");
jsonRequest.send();

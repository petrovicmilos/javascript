let buttons = document.querySelectorAll('button');
let audioKeys = document.querySelectorAll('audio');

// console.log(typeof audioKeys);

for(var i = 0; i<buttons.length; i++){
    addEventListener('keydown', function(event){
        if{
            audioKeys[i].start();
        }
    });
}

let box = document.getElementById('colorbox')
let start = document.getElementById('start')
let stop = document.getElementById('stop')


let randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
        
    } return color
}

console.log(randomColor());


function changecolor(){
    console.log("color are changing")
}
function colorStop(){
    console.log("stopped")
}
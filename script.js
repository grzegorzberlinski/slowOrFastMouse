'use strict';

let pointerX;
let pointerY;
let result = document.getElementById('result');
document.onmousemove = function (event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
}

let currentPosition = {
    'name': 'currentPosition',
    'valueX': null,
    'valueY': null
}
let previousPosition = {
    'name': 'previousPosition',
    'valueX': null,
    'valueY': null
}

let positionLog = [currentPosition, previousPosition];

function checkDifference(){ //TOFIX X POSITION
    if (Math.abs(currentPosition.valueX - previousPosition.valueX) > 20){
        result.textContent = 'fast';
        document.body.style.background = '#fd6769';
    }else{
        result.textContent = 'slow';
        document.body.style.background = '#66c2ff';
    }
    if (Math.abs(currentPosition.valueY - previousPosition.valueY) > 20){
        result.textContent = 'fast';
        document.body.style.background = '#fd6769';
    }else{
        result.textContent = 'slow';
        document.body.style.background = '#66c2ff';
    }
    console.log(`${currentPosition.valueX} and ${previousPosition.valueX}`)
}

setInterval(function () {
    previousPosition.valueX = currentPosition.valueX;
    currentPosition.valueX = pointerX;
    previousPosition.valueY = currentPosition.valueY;
    currentPosition.valueY = pointerY;
    checkDifference();
}, 100)
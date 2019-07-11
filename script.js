function random(min, max, multiplicity = 1) {

    if (multiplicity != 0) {
        return Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / multiplicity) * multiplicity;
    } else {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

var multiplicity = +prompt('Enter the multiplicity of numbers', 1);
var number = +prompt('Write number (1 - 10) or press "Ok" to exit');

if (number == 0) {
    console.log('You are out of the game!');
} else if (number == random(1, 10, multiplicity)) {
    console.log('You win!');
} else {
    window.location.reload();
}

// Last task 

var amount = +prompt('Amount of numbers')
for (let i = 0; i < amount; i++) {
   console.log(random(1, 100, multiplicity));    
}

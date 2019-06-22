var snoop = Math.floor(Math.random() * 20 + 1);
var hammer = Math.floor(Math.random() * 20 + 1);
var frat = Math.floor(Math.random() * 20 + 1);
var dog = Math.floor(Math.random() * 20 + 1);
var goalNumber = Math.floor(Math.random() * 150 + 50);
var userNumber = 0;
var wins = 0;
var losses = 0;


const snoopClick = document.getElementById("snoop");
const hammerClick = document.getElementById("hammer");
const fratClick = document.getElementById("frat");
const dogClick = document.getElementById("dog");

document.write("The Goal: " + goalNumber );

snoopClick.addEventListener('click', function() {
    userNumber = userNumber + snoop
    
});

hammerClick.addEventListener('click', function() {
    userNumber = userNumber + hammer
    document.write("Your Number: " + userNumber)
});

fratClick.addEventListener('click', function() {
    userNumber = userNumber + frat
    document.write("Your Number: " + userNumber)
});

dogClick.addEventListener('click', function() {
    userNumber = userNumber + dog
    document.write("Your Number: " + userNumber)
});

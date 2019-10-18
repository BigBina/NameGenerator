//check is the button
// so i want to generate a random name generator.
// I want to have the names at a certain index
//So the goal is to get a random number (which will be the index),
//  and print out the value of the random index
//create a form that stores strings into an array
//then we would base the students/count from that

//when they type in a form, i push into the stack

var students = []; //creating the empty array

var nameOfStudent = document.getElementById("name");//received the value for the form input
var generate = document.querySelector(".check"); //corresponds to the randomization
var h2 = document.querySelector("h2"); //The winner's name appears

//trying to input with the enter key, but for some reason it keeps refreshing the page
// nameOfStudent.addEventListener("keypress", function(event){
//     var key = event.which || event.keyCode;
//     if(key === 13){
//         students.push(nameOfStudent.value);
//     }

// });

function insert(){
    students.push(nameOfStudent.value);
    clear();
}

function clear(){
    nameOfStudent.value = "";
}

generate.addEventListener("click", function()
{
    var i = Math.floor((Math.random() * students.length));
    h2.textContent = "The winner is: " + students[i];
});


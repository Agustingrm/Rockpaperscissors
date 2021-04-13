//Possible options for Computer
let optionsarray = ['rock','papper','scissors'];

//Chose a position inside the array
//Random number 0, 1 or 2 (random position in array)
//Random Number between 0 and 2
//Random Number

function computerplay() {
    var Computer = Math.floor(Math.random()*optionsarray.length);
    return optionsarray[Computer];
}

//Human Choose Option
function humanplay() {
    //Choose your option Window
    var Human = prompt("Choose Rock, Papper or Scissors");
    //Transform Option in Lower case
    return Human.toLowerCase();
}
//Counters
var Humani = 0;
var Computerj = 0;

function game() {
while (Humani<3 && Computerj<3)

//Each round
(function round(){
    //Execute Humanplay and asign
    var Human = humanplay();
    //Execute Computerplay
    var Computer = computerplay();
    //If Human && Choose the same
    if (Human == Computer)
    {
        alert("Oh! It's a Tie!");
    }
    //If Human Choose Rock && Computer Choose Paper)
    if (Human == 'rock' && Computer == 'papper')
    {
        Computerj++;
        alert('You lose. Good Luck next time!\nHuman: '+Humani+'\nComputer: '+Computerj);
        
    }
    //If Human Choose Rock && Computer Choose Scissors)
    if (Human == 'rock' && Computer == 'scissors')
    {
        Humani++;
        alert('You win!. Good for you2!\nHuman: '+Humani+'\nComputer: '+Computerj);
        
    }
    //If Human Choose Papper && Computer Choose Rock)
    if (Human == 'papper' && Computer == 'rock')
    {   
        Humani++;
        alert('You win!. Good for you3!\nHuman: '+Humani+'\nComputer: '+Computerj);
       
    }
    //If Human Choose Papper && Computer Choose Scissors)
    if (Human == 'papper' && Computer == 'rock')
    {   
        Computerj++;
        alert('You lose. Good Luck next time4!\nHuman: '+Humani+'\nComputer: '+Computerj);
        
    }
    //If Human Choose Scissors && Computer Choose Rock)
    if (Human == 'scissors' && Computer == 'rock')
    {
        Computerj++;
        alert('You lose. Good Luck next time!\nHuman: '+Humani+'\nComputer: '+Computerj);
        
    }
    //If Human Choose Scissors && Computer Choose Paper)
    if (Human == 'scissors' && Computer == 'papper')
    {   
        Humani++;
        alert('You win!. Good for you!\nHuman: '+Humani+'\nComputer: '+Computerj);
    }
    console.log('Human: ' +Humani + ' - Computer: '+Computerj);
})();
return ('Final Result: Human: ' +Humani + ' - Computer: '+Computerj);
}
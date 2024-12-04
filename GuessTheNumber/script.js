let randnum=Math.floor(Math.random()*100+1);
form=document.querySelector('form');
let resultdiv=document.querySelector('.result');
let prevguessesspan=document.querySelector('#prevguesses');
let remguessspan=document.querySelector('#remguesses');
let canplay=true;

let totalguess=10;
let currguess=0;

guess.addEventListener('submit',function(e){
    e.preventDefault();
    let userguess=parseInt(form.elements.guessinputbox.value);
    console.log(userguess)
    validateGuess(userguess);
    currguess++;
    numremguess=totalguess-currguess;
    prevguessesspan.textContent+=userguess+' ';
    remguessspan.textContent=numremguess;
    if(numremguess==0){
        displayMessage('Game over! The number was '+randnum);
        canplay=false;
        newgame();
    }
    form.elements.guessinputbox.value='';
});

endbtn.addEventListener('click',function(e){
    e.preventDefault();
    displayMessage('Game over! The number was '+randnum);
    canplay=false;
    form.style.display='none';
});

function validateGuess(guess){
    if(isNaN(guess)){
        displayMessage('Please enter a valid number');
    }
    else if(guess<1 || guess>100){
        displayMessage('Please enter a number between 1 and 100');
    }
    else{
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if(guess===randnum){
        displayMessage('Congratulations! You guessed it right');
        newgame();
    }
    else if(guess>randnum){
        displayMessage('Too high! Try again');
    }
    else{
        displayMessage('Too low! Try again');
    }
}

function displayMessage(message){
    resultdiv.innerHTML=message;
}

function newgame(){
    randnum=Math.floor(Math.random()*100+1);
    totalguess=10;
    currguess=0;
    prevguessesspan.textContent='';
    remguessspan.textContent=totalguess-currguess;
    canplay=true;
}
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sbmt");
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".prevguesses")
const reamining = document.querySelector(".remainingguess")
const loworHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".finalbox")


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function  validateGuess(guess){
    // checking valid no , or not less than 1 and more than 99.
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1 || guess > 99){
        alert("Please enter a valid number between 1 and 99")
    }else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber} `)
            EndGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        EndGame();
    }else if(guess < randomNumber){
        displayMessage(`your guess is lower than value`);
    }else{
        displayMessage(`your guess is higher than value`);
    }
}

function displayGuess(guess){
    // in this we remove the value with empty string after submitting the guessed value. 
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    reamining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    // interact with dom.
    loworHi.innerHTML = `<h2>${message}<h2>`
}

function EndGame(){
    // Game will end

    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        reamining.innerHTML = 10
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}








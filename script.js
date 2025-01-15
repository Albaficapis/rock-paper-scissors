let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissor'];
    let retainedChoice = Math.floor(Math.random() * 3);
   return possibleChoice[retainedChoice];
}

function getHumanChoice(){
    let humanChoice = prompt("Veuillez choisir entre rock, paper, scissor");
    if(humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissor') {
            return humanChoice;
    } else {
        return "Vous n'avez pas fait un choix valide. Veuillez recommencer";
    }
}




function playRound(computerChoice, humanChoice) {
    if(computerChoice == humanChoice) {
        computerScore += 0;
        humanScore += 0;
      
        console.log("Vous êtes à égalité. Personne ne marque. Ordinateur a un score de " + computerScore + " et vous avez un socre de " + humanScore);
    }

    if(computerChoice == 'rock') {
        if(humanChoice == 'paper') {
            humanScore++;
            console.log("Le papier bat la pierre. Vous avez gagné. Vous avez " + humanScore + " points. Ordinateur a " + computerScore + " points");
        } else {
            computerScore++;
            console.log("La pierre bat le ciseau. Vous avez perdu. Vous avez " + humanScore + " points. Ordinateur a " + computerScore + " points");
        }
    }

    if(computerChoice == 'paper') {
        if(humanChoice == 'rock') {
            computerScore++;
            console.log("Le papier bat la pierre. Vous perdu. Vous avez " + humanScore + " points. Ordinateur a " + computerScore + " points");
        } else {
            humanScore++;
            console.log("Le ciseau bat le paier. Vous avez gagné. Vous avez " + humanScore + " points. Ordinateur a " + computerScore + " points");
        }
    }

    if(computerChoice == 'scissor') {
        if(humanChoice == 'rock') {
            humanScore++;
            console.log("La pierre bat le ciseau. Vous avez gagné. Vous avez " + humanScore + " points. Ordinateur a " + computerScore + " points");
                
        } else {
            computerScore++;
            console.log("Le ciseau bat le paier. Vous avez perdu. Vous avez " + humanScore + " points. Ordinateur a " + computerScore + " points");
        }
    }
    console.log("Choix de l'ordinateur : " + computerChoice + "\n" + "Votre choix : " + humanChoice + "\n" );
}
    
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

//playRound(computerChoice, humanChoice);
playRound(computerChoice, humanChoice);
function playGame() {
  
    for (let i = 1;  i <= 5; i++) {
        let playRound;
        console.log(playRound);
    }

}


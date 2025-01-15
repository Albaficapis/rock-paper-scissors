let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissor'];
    let retainedChoice = Math.floor(Math.random() * 3);
    return possibleChoice[retainedChoice];
}

function getHumanChoice(){
    let humanChoice = prompt("Veuillez choisir entre rock, paper, scissor");
    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissor') {
            return humanChoice;
    } else {
        return "Vous n'avez pas fait un choix valide. Veuillez recommencer";
    }
}




function playRound(computerChoice, humanChoice) {
    if(computerChoice === humanChoice) {
       console.log("Vous êtes à égalité. Personne ne marque.");
    } else if(
        (computerChoice === 'rock' && humanChoice === 'scissor') ||
        (computerChoice === 'scissor' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        computerScore++;
        console.log("Vous avez perdu cette manche ! " + computerChoice + " bat " + humanChoice + ".");
    } else {
        humanScore++;
        console.log("Vous avez gagné cette manche ! " + humanChoice + " bat " + computerChoice + ".");
    }

   console.log("Score actuel ordinateur: " + computerScore + "\n" + "Votre score : " + humanScore + "\n" );
}
    


//playRound(computerChoice, humanChoice);

function playGame() {
   
    for (let i = 0;  i < 5; i++) {
        console.log("Manche "+ [i+1] + " : ");
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();


        //valider utilisateur a fait un choix correct 
        if (humanChoice === "Vous n'avez pas fait un choix valide. Veuillez recommencer") {
            console.log(humanChoice); // Affiche le message d'erreur
            i--; // Rejouer la manche
            continue; // Passe à la prochaine itération
        }
        playRound(computerChoice, humanChoice);
        
        
    }
    console.log("\nRésultat final :");
    if (computerScore < humanScore) {
        console.log(" Bravo. Vous êtes le vainqueur");
    }
    else if(computerScore > humanScore) 
        {console.log("Le vainqueur est l'ordinateur");

        } 
    console.log("Score Final Ordinateur :" + computerScore + "\nVotre Score " +humanScore);
    

}

playGame();


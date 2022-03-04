function computerPlay(){
		const computerHand = Math.floor((Math.random()*3)+1);
		if(computerHand === 1){
			return "rock";
		} else if (computerHand === 2){
			return "paper";
		}else {
			return "scissor";
		}
	}
	function playRound(playerSelection, computerSelection){
		if(playerSelection == "rock" && computerSelection == "paper"){
			console.log("You use rock, computer use paper. You Lose!");
			return "computer";
		} else if(playerSelection == "paper" && computerSelection == "scissor"){
			console.log("You use paper, computer use scissor. You Lose!");
			return "computer";
		} else if(playerSelection == "scissor" && computerSelection == "rock"){
			console.log("You use scissor, computer use rock. You Lose!");
			return "computer";
		}else if(playerSelection == "rock" && computerSelection == "scissor"){
			console.log("You use rock, computer use scissor. You Win!");
			return "user";
		}else if(playerSelection == "paper" && computerSelection == "rock"){
			console.log("You use paper, computer use rock. You Win!");
			return "user";
		}else if(playerSelection == "scissor" && computerSelection == "paper"){
			console.log("You use scissor, computer use paper. You Win!");
			return "user";
		}else if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor"){
			console.log("Invalid Input. Try Again");
			return "none"
		}else {
			console.log("Draw! Try Again");
			return "none"
		}
	}
	function game(){
		let playerScore = 0;
		let computerScore = 0;
		let round = 5;
		for (let i=0; i<round; i++){
			let playerSelection = prompt("Enter your Hand (rock,paper or scissor):");
			playerSelection = playerSelection.toLowerCase();
			let computerSelection = computerPlay();
			let winner = playRound(playerSelection, computerSelection);
			if(winner == "computer"){
				computerScore = computerScore + 1;
				console.log(`round:${i+1}|computer:${computerScore}|player:${playerScore}`)
			}else if(winner == "user"){
				playerScore = playerScore +1 ;
				console.log(`round:${i+1}|computer:${computerScore}|player:${playerScore}`)
			}else {
				round = round + 1;
				console.log(`round:${i+1}|computer:${computerScore}|player:${playerScore}`)
			}
			if(playerScore === 3 && computerScore <=2){
				console.log("You Win!");
				return "user";
				break;
			}else if(computerScore === 3 && playerScore <=2) {
				console.log("Computer Wins");
				return "computer";
				break;
			} else continue;
		}
	}
	game();
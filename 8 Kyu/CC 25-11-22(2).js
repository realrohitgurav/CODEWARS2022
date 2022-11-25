// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(p1, p2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Solution:-
// 1)
function rps(p1, p2){
    if(p1 == "scissors" && p2 =="paper"){
        return "Player 1 won!"
    }else if(p1 == "scissors" && p2 =="rock"){
        return "Player 2 won!"
    }else(p1 == "paper" && p2 =="paper")
        return "Draw!"
    
}
rps("scissors","paper")

// 2)
const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    return 'Player 2 won!';
  };








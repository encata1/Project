let playerText = document.getElementById('playerText');

let restartBtn = document.getElementById('restartBtn');

let boxes = Array.from (document.getElementsByClassName('box'));

let winnerindicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

//console.log(boxes)

const O_TEXT = "O";
const X_TEXT = "X";

    let currentPlayer = X_TEXT;
    let spaces = Array(9).fill(null);

    //console.log(spaces) 
    const startGame = () => {
        boxes.forEach(box => box.addEventListener('click', boxclicked));
    }  
    function boxclicked(e){
        //console.log(e.target)
        const id = e.target.id;
        if(!spaces[id]){
            spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            if(playerHasWon() !== false){
                playerText = `${currentPlayer} has won`; 
                let winning_blocks =  playerHasWon();
                //console.log(winning_blocks)
                winning_blocks.map(box=>boxes[box].style.backgroundColor = winnerindicator);
            
                return;

            
            }
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT: X_TEXT

        }
    }
    const winningCombs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    function playerHasWon(){
        for(const conditions of winningCombs){
let [a, b, c] = conditions
if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
    return [a,b,c];
}

       }
       return false;
    }
    restartBtn.addEventListener('click', restart);
    function restart(){
        spaces.fill(null);
        boxes.forEach(box =>{
            box.innerText = '';
            box.style.backgroundColor='';
        });
        playerText = 'Tic Tac Toe';
        currentPlayer = X_TEXT;
    }
    
    startGame();
